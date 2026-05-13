const { spawn } = require("child_process");
const fs = require("fs");
const os = require("os");
const path = require("path");

const root = path.resolve(__dirname, "..");
const appPath = path.join(root, "app.js");
const statePath = path.join(root, "gallery-update-state.json");
const chromePath = process.env.CHROME_PATH || "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const chromePort = Number(process.env.CHROME_DEBUG_PORT || 9244);
const batchSize = Number(process.env.BATCH_SIZE || 10);
const startDisplayId = process.env.START_DISPLAY_ID || "";
const force = process.env.FORCE_GALLERY_UPDATE === "1";
const targetIds = parseTargetIds(process.env.TARGET_IDS || "");
const permissionDeniedPauseMs = Number(process.env.PERMISSION_DENIED_PAUSE_MS || 30 * 60 * 1000);
const permissionDeniedRetryLimit = Number(process.env.PERMISSION_DENIED_RETRY_LIMIT || Infinity);

const activeUnavailableStatuses = new Set([
  "sold",
  "under_offer",
  "under contract",
  "under_contract",
  "withdrawn",
  "off_market",
  "leased",
  "moved",
  "deleted",
  "unavailable"
]);

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function parseTargetIds(value) {
  const text = String(value || "").trim();
  if (!text) return null;
  try {
    const parsed = JSON.parse(text);
    if (Array.isArray(parsed)) return new Set(parsed.map(String).filter(Boolean));
  } catch {}
  return new Set(text.split(/[,\s]+/).map(item => item.trim()).filter(Boolean));
}

function readProperties() {
  const source = fs.readFileSync(appPath, "utf8");
  const start = source.indexOf("const sampleProperties = [");
  const end = source.indexOf("];", start) + 2;
  const sandbox = {};
  require("vm").runInNewContext(source.slice(start, end).replace("const sampleProperties", "sampleProperties"), sandbox);
  sandbox.sampleProperties.forEach((property, index) => {
    property.displayId = property.displayId || String(index + 1).padStart(5, "0");
  });
  return { source, properties: sandbox.sampleProperties };
}

function readUpdateState() {
  if (!fs.existsSync(statePath)) return { runs: [] };
  try {
    return JSON.parse(fs.readFileSync(statePath, "utf8"));
  } catch {
    return { runs: [] };
  }
}

function previouslyCheckedIds() {
  if (force) return new Set();
  const state = readUpdateState();
  return new Set((state.runs || []).flatMap(run => (run.results || []).map(result => result.id)));
}

function isActiveProperty(property) {
  return !activeUnavailableStatuses.has(String(property.status || "active").toLowerCase());
}

function hasGallery(property) {
  return Array.isArray(property.images) && property.images.length > 1;
}

function galleryCandidates(properties) {
  const checkedIds = previouslyCheckedIds();
  return properties
    .filter(property => !targetIds || targetIds.has(property.id))
    .filter(isActiveProperty)
    .filter(property => property.listingUrl)
    .filter(property => force || !hasGallery(property))
    .filter(property => force || !checkedIds.has(property.id))
    .filter(property => targetIds || !startDisplayId || property.displayId >= startDisplayId)
    .sort((a, b) => String(a.displayId).localeCompare(String(b.displayId), undefined, { numeric: true }))
    .slice(0, batchSize);
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
    socket.onopen = () => {
      resolve({
        send(method, params = {}) {
          const id = sequence += 1;
          socket.send(JSON.stringify({ id, method, params }));
          return new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
        },
        close() {
          socket.close();
        }
      });
    };
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
    .filter(url => !/property-image|project-image|placeholder|no-image|logo|favicon|sprite|avatar|floorplan/i.test(url))
    .filter(url => {
      const key = (() => {
        try {
          const parsed = new URL(url);
          return `${parsed.origin}${parsed.pathname}`;
        } catch {
          return url.replace(/\?.*$/, "");
        }
      })();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
}

function imageExtractionExpression(listingUrl) {
  return `(() => {
    const listingUrl = ${JSON.stringify(listingUrl)};
    const host = (() => { try { return new URL(listingUrl).hostname; } catch { return ""; } })();
    return Array.from(document.images).map(img => ({
      src: img.currentSrc || img.src || "",
      alt: img.alt || "",
      width: img.naturalWidth || img.width || 0,
      height: img.naturalHeight || img.height || 0,
      host
    }));
  })()`;
}

function filterGalleryImages(listingUrl, rawImages) {
  const host = (() => {
    try {
      return new URL(listingUrl).hostname.toLowerCase();
    } catch {
      return "";
    }
  })();

  if (host.endsWith("realestate.com.au")) {
    return uniqueImageUrls(rawImages
      .filter(item => /i2\.au\.reastatic\.net/i.test(item.src))
      .filter(item => /Media Overview Image|image \d+ of \d+/i.test(item.alt || ""))
      .map(item => item.src));
  }

  if (host.endsWith("domain.com.au")) {
    return uniqueImageUrls(rawImages
      .filter(item => /domainstatic\.com\.au/i.test(item.src))
      .filter(item => Number(item.width || 0) >= 240 || /property|image|photo/i.test(item.alt || ""))
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
      const buttons = Array.from(document.querySelectorAll("button"));
      const button = buttons.find(item => /photos available|preview property images|view photos|photos|images/i.test(item.innerText || item.getAttribute("aria-label") || ""));
      if (button) button.click();
      return button ? (button.innerText || button.getAttribute("aria-label") || "clicked") : "no photo button";
    })()`
  });
}

async function pageAvailability(client) {
  const result = await client.send("Runtime.evaluate", {
    returnByValue: true,
    expression: `(() => ({
      url: location.href,
      title: document.title || "",
      text: document.body ? document.body.innerText.slice(0, 3000) : ""
    }))()`
  });
  const page = result.result.value || {};
  const text = `${page.url || ""}\n${page.title || ""}\n${page.text || ""}`.toLowerCase();
  const unavailable = /looks like this page is off the market|off the market|page is no longer available|property is no longer available|listing is no longer available|page not found|404|sold property|this listing has been removed/.test(text);
  const permissionDenied = /permission denied|access denied|request blocked|temporarily blocked|too many requests|captcha|verify you are human|are you a human/.test(text);
  return { unavailable, permissionDenied, url: page.url || "", title: page.title || "" };
}

async function extractGallery(client, property) {
  let permissionDeniedAttempts = 0;
  while (true) {
    await client.send("Page.navigate", { url: property.listingUrl });
    await delay(10000);
    const availability = await pageAvailability(client);
    if (availability.unavailable) return { images: [], unavailable: true, blocked: false, reason: "off-market" };
    if (!availability.permissionDenied) break;
    permissionDeniedAttempts += 1;
    if (permissionDeniedAttempts > permissionDeniedRetryLimit) {
      return { images: [], unavailable: false, blocked: true, reason: "permission-denied" };
    }
    console.log(`${property.displayId} ${property.id}: permission denied, pausing for ${Math.round(permissionDeniedPauseMs / 1000)} seconds`);
    await delay(permissionDeniedPauseMs);
  }
  await openPhotoGallery(client);

  let rawImages = [];
  for (let attempt = 0; attempt < 10; attempt += 1) {
    await delay(2000);
    const result = await client.send("Runtime.evaluate", {
      returnByValue: true,
      expression: imageExtractionExpression(property.listingUrl)
    });
    rawImages = result.result.value || [];
    const filtered = filterGalleryImages(property.listingUrl, rawImages);
    if (filtered.length > 3 || attempt === 9) return { images: filtered, unavailable: false, blocked: false, reason: filtered.length ? "ok" : "no-images" };
  }

  return { images: [], unavailable: false, blocked: false, reason: "no-images" };
}

function findPropertyObjectRange(source, id) {
  const escapedId = id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const idPattern = new RegExp(`id:\\s*["']${escapedId}["']`);
  const match = idPattern.exec(source);
  if (!match) return null;

  const start = source.lastIndexOf("\n  {", match.index);
  if (start === -1) return null;
  let depth = 0;
  let quote = "";
  let escaped = false;
  for (let index = start + 1; index < source.length; index += 1) {
    const char = source[index];
    if (quote) {
      if (escaped) escaped = false;
      else if (char === "\\") escaped = true;
      else if (char === quote) quote = "";
      continue;
    }
    if (char === '"' || char === "'" || char === "`") {
      quote = char;
      continue;
    }
    if (char === "{") depth += 1;
    if (char === "}") {
      depth -= 1;
      if (depth === 0) return { start: start + 1, end: index + 1 };
    }
  }
  return null;
}

function findArrayEnd(text, start) {
  const open = text.indexOf("[", start);
  if (open === -1) return -1;
  let depth = 0;
  let quote = "";
  let escaped = false;
  for (let index = open; index < text.length; index += 1) {
    const char = text[index];
    if (quote) {
      if (escaped) escaped = false;
      else if (char === "\\") escaped = true;
      else if (char === quote) quote = "";
      continue;
    }
    if (char === '"' || char === "'" || char === "`") {
      quote = char;
      continue;
    }
    if (char === "[") depth += 1;
    if (char === "]") {
      depth -= 1;
      if (depth === 0) return index + 1;
    }
  }
  return -1;
}

function formatImages(images) {
  return `    images: [\n${images.map(url => `      ${JSON.stringify(url)}`).join(",\n")}\n    ],`;
}

function updateImages(objectText, images) {
  const imagesMatch = /\n    images\s*:/.exec(objectText);
  const imagesText = formatImages(images);
  if (imagesMatch) {
    const end = findArrayEnd(objectText, imagesMatch.index);
    if (end !== -1) {
      const commaEnd = objectText[end] === "," ? end + 1 : end;
      return objectText.slice(0, imagesMatch.index) + "\n" + imagesText + objectText.slice(commaEnd);
    }
  }

  const listingIndex = objectText.search(/\n    listingUrl\s*:/);
  if (listingIndex !== -1) return objectText.slice(0, listingIndex) + "\n" + imagesText + objectText.slice(listingIndex);
  return objectText.replace(/\n  }$/, `,\n${imagesText}\n  }`);
}

function updateStatusUnavailable(objectText) {
  const statusLine = '    status: "unavailable",';
  if (/\n    status\s*:/.test(objectText)) {
    objectText = objectText.replace(/\n    status\s*:\s*["'][^"']*["'],?/, `\n${statusLine}`);
  } else {
    const notesIndex = objectText.search(/\n    notes\s*:/);
    objectText = notesIndex !== -1
      ? objectText.slice(0, notesIndex) + `\n${statusLine}` + objectText.slice(notesIndex)
      : objectText.replace(/\n  }$/, `,\n${statusLine}\n  }`);
  }

  const checkedNote = "Exact listing appeared off market during gallery update.";
  if (objectText.includes(checkedNote)) return objectText;
  const notesMatch = /\n    notes\s*:\s*"((?:\\.|[^"\\])*)"/.exec(objectText);
  if (!notesMatch) return objectText;
  const currentNotes = JSON.parse(`"${notesMatch[1]}"`);
  const nextNotes = `${currentNotes} ${checkedNote}`.trim();
  return objectText.slice(0, notesMatch.index) +
    `\n    notes: ${JSON.stringify(nextNotes)}` +
    objectText.slice(notesMatch.index + notesMatch[0].length);
}

function currentObjectImages(objectText) {
  try {
    const property = Function(`"use strict"; return (${objectText});`)();
    return uniqueImageUrls([property.image, ...(Array.isArray(property.images) ? property.images : [])]);
  } catch {
    return [];
  }
}

function patchGalleries(results) {
  let source = fs.readFileSync(appPath, "utf8");
  const patched = [];
  for (const result of results) {
    const range = findPropertyObjectRange(source, result.id);
    if (!range) continue;
    const objectText = source.slice(range.start, range.end);
    if (result.unavailable) {
      source = source.slice(0, range.start) + updateStatusUnavailable(objectText) + source.slice(range.end);
      patched.push({ displayId: result.displayId, id: result.id, status: "unavailable" });
      continue;
    }
    if (!result.images.length) continue;
    const existingImages = currentObjectImages(objectText);
    const nextImages = uniqueImageUrls([...existingImages, ...result.images]);
    if (!nextImages.length || nextImages.length <= existingImages.length) continue;
    source = source.slice(0, range.start) + updateImages(objectText, nextImages) + source.slice(range.end);
    patched.push({ displayId: result.displayId, id: result.id, images: nextImages.length });
  }
  if (patched.length) fs.writeFileSync(appPath, source);
  return patched;
}

function writeState(results, patched) {
  const previous = readUpdateState();
  previous.runs.push({
    updatedAt: new Date().toISOString(),
    batchSize,
    startDisplayId,
    targetIds: targetIds ? Array.from(targetIds) : undefined,
    results: results.map(result => ({
      displayId: result.displayId,
      id: result.id,
      title: result.title,
      imageCount: result.images.length,
      unavailable: Boolean(result.unavailable),
      blocked: Boolean(result.blocked),
      reason: result.reason || ""
    })),
    patched
  });
  fs.writeFileSync(statePath, JSON.stringify(previous, null, 2));
}

async function main() {
  if (!fs.existsSync(chromePath)) throw new Error(`Chrome was not found at ${chromePath}`);
  const { properties } = readProperties();
  const targets = galleryCandidates(properties);
  if (!targets.length) {
    console.log("No gallery candidates found.");
    return;
  }

  const chromeUserData = path.join(os.tmpdir(), `codex-gallery-${Date.now()}`);
  const chrome = spawn(chromePath, [
    `--remote-debugging-port=${chromePort}`,
    `--user-data-dir=${chromeUserData}`,
    "--no-first-run",
    "--no-default-browser-check",
    "--window-size=1280,900",
    "about:blank"
  ], { stdio: "ignore", windowsHide: true });

  try {
    await waitForChrome();
    const tab = await newTab();
    const client = await connect(tab.webSocketDebuggerUrl);
    await client.send("Runtime.enable");
    await client.send("Page.enable");

    const results = [];
    for (const property of targets) {
      console.log(`${property.displayId} ${property.id}: checking`);
      const result = await extractGallery(client, property);
      results.push({
        displayId: property.displayId,
        id: property.id,
        title: property.title,
        listingUrl: property.listingUrl,
        images: result.images,
        unavailable: result.unavailable,
        blocked: result.blocked,
        reason: result.reason
      });
      console.log(`${property.displayId} ${property.id}: ${result.unavailable ? "off market" : result.blocked ? "permission denied" : `${result.images.length} images`}`);
    }

    client.close();
    const patched = patchGalleries(results);
    writeState(results, patched);
    console.log(JSON.stringify({ checked: results.length, patched }, null, 2));
  } finally {
    chrome.kill();
  }
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
