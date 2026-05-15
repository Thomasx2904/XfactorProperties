const { spawn } = require("child_process");

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const chromePort = 9261;
const candidates = JSON.parse(process.env.CANDIDATES_JSON || "[]");

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

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
  const response = await fetch(`http://127.0.0.1:${chromePort}/json/new`, { method: "PUT" });
  if (!response.ok) throw new Error(`Could not open Chrome tab: ${response.status}`);
  return response.json();
}

function connect(wsUrl) {
  const socket = new WebSocket(wsUrl);
  let sequence = 0;
  const pending = new Map();

  socket.onmessage = event => {
    const message = JSON.parse(event.data);
    if (!message.id || !pending.has(message.id)) return;
    const callbacks = pending.get(message.id);
    pending.delete(message.id);
    if (message.error) callbacks.reject(new Error(message.error.message));
    else callbacks.resolve(message.result);
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

function uniqueImageUrls(images) {
  const seen = new Set();
  return images
    .map(normaliseImageUrl)
    .map(url => url.trim())
    .filter(url => /^https?:\/\//i.test(url))
    .filter(url => !/property-image|project-image|placeholder|no-image|logo|favicon|sprite|avatar|floorplan|video/i.test(url))
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

function filterImages(listingUrl, rawImages) {
  const host = new URL(listingUrl).hostname.toLowerCase();
  if (host.endsWith("realestate.com.au")) {
    return uniqueImageUrls(rawImages
      .filter(item => /i2\.au\.reastatic\.net/i.test(item.src))
      .filter(item => /Media Overview Image|image \d+ of \d+/i.test(item.alt || ""))
      .map(item => item.src));
  }
  if (host.endsWith("domain.com.au")) {
    return uniqueImageUrls(rawImages
      .filter(item => /domainstatic\.com\.au/i.test(item.src))
      .filter(item => Number(item.width || 0) >= 240 || /Image \d+|property|photo/i.test(item.alt || ""))
      .map(item => item.src));
  }
  if (host.endsWith("homely.com.au")) {
    return uniqueImageUrls(rawImages
      .filter(item => /homely\.com\.au\/img-variant/i.test(item.src))
      .map(item => item.src));
  }
  return uniqueImageUrls(rawImages.map(item => item.src));
}

async function openPhotoGallery(client) {
  await client.send("Runtime.evaluate", {
    expression: `(() => {
      const text = item => item.innerText || item.getAttribute("aria-label") || item.getAttribute("title") || "";
      const controls = Array.from(document.querySelectorAll("button, a"));
      const control = controls.find(item => /photos|images|view photos|preview property images/i.test(text(item)));
      if (control) control.click();
      return control ? text(control) : "no gallery control";
    })()`
  });
}

async function pageAvailability(client) {
  const result = await client.send("Runtime.evaluate", {
    returnByValue: true,
    expression: `(() => ({
      url: location.href,
      title: document.title || "",
      text: document.body ? document.body.innerText.slice(0, 5000) : ""
    }))()`
  });
  const page = result.result.value || {};
  const text = `${page.url}\n${page.title}\n${page.text}`.toLowerCase();
  return {
    unavailable: /off the market|sold property|under offer|under contract|listing is no longer available|page not found|404|this property has been sold/.test(text),
    url: page.url || "",
    title: page.title || ""
  };
}

async function extract(client, candidate) {
  await client.send("Page.navigate", { url: candidate.listingUrl });
  await delay(10000);
  const availability = await pageAvailability(client);
  if (availability.unavailable) return { ...candidate, images: [], unavailable: true, page: availability };
  await openPhotoGallery(client);
  await delay(6000);
  const result = await client.send("Runtime.evaluate", {
    returnByValue: true,
    expression: `(() => Array.from(document.images).map(img => ({
      src: img.currentSrc || img.src || "",
      alt: img.alt || "",
      width: img.naturalWidth || img.width || 0,
      height: img.naturalHeight || img.height || 0
    })))()`
  });
  return { ...candidate, images: filterImages(candidate.listingUrl, result.result.value || []), unavailable: false, page: availability };
}

async function main() {
  const userDataDir = `${process.env.TEMP || process.env.TMP || "."}\\codex-gallery-${Date.now()}`;
  const chrome = spawn(chromePath, [
    "--headless=new",
    "--no-sandbox",
    "--disable-dev-shm-usage",
    `--remote-debugging-port=${chromePort}`,
    `--user-data-dir=${userDataDir}`,
    "--remote-allow-origins=*",
    "--disable-gpu",
    "--no-first-run",
    "--no-default-browser-check",
    "--window-size=1440,1000",
    "about:blank"
  ], { stdio: "ignore", windowsHide: true });

  try {
    await waitForChrome();
    const tab = await newTab();
    const client = await connect(tab.webSocketDebuggerUrl);
    await client.send("Runtime.enable");
    await client.send("Page.enable");
    const results = [];
    for (const candidate of candidates) {
      console.error(`checking ${candidate.id}`);
      results.push(await extract(client, candidate));
    }
    await client.send("Browser.close");
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
