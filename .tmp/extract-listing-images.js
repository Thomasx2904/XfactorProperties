const { spawn } = require("child_process");

const chromePath = process.env.CHROME_PATH || "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const chromePort = Number(process.env.CHROME_DEBUG_PORT || 9271);
const candidates = JSON.parse(process.env.CANDIDATES_JSON || "[]");

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function waitForChrome() {
  for (let index = 0; index < 60; index += 1) {
    try {
      const response = await fetch(`http://127.0.0.1:${chromePort}/json/version`);
      if (response.ok) return;
    } catch {}
    await delay(500);
  }
  throw new Error("Chrome did not start.");
}

async function newTab() {
  let lastError = null;
  for (let index = 0; index < 20; index += 1) {
    try {
      const response = await fetch(`http://127.0.0.1:${chromePort}/json/new`, { method: "PUT" });
      if (response.ok) return response.json();
      lastError = new Error(`Could not open Chrome tab: ${response.status}`);
    } catch (error) {
      lastError = error;
    }
    await delay(500);
  }
  throw lastError || new Error("Could not open Chrome tab.");
}

function connect(wsUrl) {
  const socket = new WebSocket(wsUrl);
  let sequence = 0;
  const pending = new Map();
  let networkCapture = null;

  socket.onmessage = event => {
    const message = JSON.parse(event.data);
    if (message.id && pending.has(message.id)) {
      const callbacks = pending.get(message.id);
      pending.delete(message.id);
      if (message.error) callbacks.reject(new Error(message.error.message));
      else callbacks.resolve(message.result);
      return;
    }
    if (message.method && networkCapture) {
      const params = message.params || {};
      const url = params.response?.url || params.request?.url || "";
      if (url) networkCapture.push(url);
    }
  };

  return new Promise((resolve, reject) => {
    socket.onopen = () => resolve({
      send(method, params = {}) {
        const id = sequence += 1;
        socket.send(JSON.stringify({ id, method, params }));
        return new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
      },
      close() {
        socket.close();
      },
      setNetworkCapture(target) {
        networkCapture = target;
      }
    });
    socket.onerror = () => reject(new Error("Chrome websocket failed."));
  });
}

function normaliseImageUrl(url) {
  const text = String(url || "");
  if (/i2\.au\.reastatic\.net/i.test(text)) {
    return text.replace(/https:\/\/i2\.au\.reastatic\.net\/[^/]+\//i, "https://i2.au.reastatic.net/800x600/");
  }
  return text;
}

function cleanImages(urls) {
  const seen = new Set();
  return urls
    .map(normaliseImageUrl)
    .filter(url => /^https?:\/\//i.test(url))
    .filter(url => !/property-image|project-image|placeholder|no-image|logo|favicon|sprite|avatar|floorplan|video/i.test(url))
    .filter(url => /i2\.au\.reastatic\.net|domainstatic\.com\.au|homely\.com\.au\/img-variant/i.test(url))
    .filter(url => {
      let key = url.replace(/\?.*$/, "");
      try {
        const parsed = new URL(url);
        key = `${parsed.origin}${parsed.pathname}`;
      } catch {}
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
}

async function extract(client, candidate, networkUrls) {
  await client.send("Page.enable");
  await client.send("Runtime.enable");
  await client.send("Network.enable");
  await client.send("Page.navigate", { url: candidate.listingUrl });
  await delay(10000);
  await client.send("Runtime.evaluate", {
    expression: `(() => {
      window.scrollTo(0, 0);
      const controls = Array.from(document.querySelectorAll('button, a'));
      const control = controls.find(item => /photos|images|view photos|preview property images/i.test(item.innerText || item.getAttribute('aria-label') || item.getAttribute('title') || ''));
      if (control) control.click();
      return control ? 'clicked' : 'no-control';
    })()`
  });
  for (let index = 0; index < 6; index += 1) {
    await client.send("Runtime.evaluate", { expression: `window.scrollTo(0, document.body.scrollHeight * ${index / 5});` });
    await delay(1500);
  }
  const domResult = await client.send("Runtime.evaluate", {
    returnByValue: true,
    expression: `(() => {
      const imageUrls = Array.from(document.images).flatMap(img => [img.currentSrc, img.src, img.getAttribute('srcset')].filter(Boolean));
      const sourceUrls = Array.from(document.querySelectorAll('source')).flatMap(item => [item.srcset, item.getAttribute('srcset')].filter(Boolean));
      const bgUrls = Array.from(document.querySelectorAll('*')).map(el => getComputedStyle(el).backgroundImage).filter(item => item && item !== 'none');
      return [...imageUrls, ...sourceUrls, ...bgUrls];
    })()`
  });
  return {
    ...candidate,
    images: cleanImages([...(domResult.result.value || []), ...networkUrls])
  };
}

async function main() {
  const userDataDir = `${process.env.TEMP || process.env.TMP || "."}\\codex-network-images-${Date.now()}`;
  const chrome = spawn(chromePath, [
    `--remote-debugging-port=${chromePort}`,
    `--user-data-dir=${userDataDir}`,
    "--no-sandbox",
    "--disable-dev-shm-usage",
    "--disable-gpu",
    "--remote-allow-origins=*",
    "--no-first-run",
    "--no-default-browser-check",
    "--window-size=1400,1000",
    "about:blank"
  ], { stdio: "ignore", windowsHide: true });

  try {
    await waitForChrome();
    const tab = await newTab();
    const client = await connect(tab.webSocketDebuggerUrl);
    const results = [];
    for (const candidate of candidates) {
      console.error(`checking ${candidate.id}`);
      const networkUrls = [];
      client.setNetworkCapture(networkUrls);
      results.push(await extract(client, candidate, networkUrls));
    }
    client.close();
    console.log(JSON.stringify(results, null, 2));
  } finally {
    chrome.kill();
  }
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
