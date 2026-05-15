const { spawn } = require("child_process");
const fs = require("fs");
const os = require("os");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const appPath = path.join(root, "app.js");
const statePath = path.join(root, "hidden-price-update-state.json");
const chromePath = process.env.CHROME_PATH || "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const chromePort = Number(process.env.CHROME_DEBUG_PORT || 9254);
const batchSize = Number(process.env.BATCH_SIZE || 40);
const pageWaitMs = Number(process.env.PRICE_PAGE_WAIT_MS || 6500);
const targetIds = parseTargetIds(process.env.TARGET_IDS || "");
const force = process.env.FORCE_HIDDEN_PRICE_UPDATE === "1";

const inactiveStatuses = new Set([
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

const priceCodeMapping = {
  "001S": [0, 100000],
  "002S": [100000, 200000],
  "003S": [200000, 300000],
  "005S": [300000, 400000],
  "006S": [400000, 500000],
  "008S": [500000, 600000],
  "010S": [600000, 750000],
  "014S": [750000, 1000000],
  "017S": [1000000, 1500000],
  "018S": [1500000, 2000000],
  "020S": [2000000, 2500000],
  "021S": [2500000, 3000000],
  "022S": [3000000, 3500000],
  "024S": [3500000, 4000000],
  "025S": [4000000, 4500000],
  "026S": [4500000, 5000000],
  "027S": [5000000, null]
};

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

function readApp() {
  const source = fs.readFileSync(appPath, "utf8");
  const dataEnd = source.indexOf("const databaseUpdatedAt");
  if (dataEnd === -1) throw new Error("Could not find app data boundary.");
  const dataSource = source.slice(0, dataEnd).replace("const sampleProperties =", "sampleProperties =");
  const sandbox = { sampleProperties: null };
  vm.createContext(sandbox);
  vm.runInContext(dataSource, sandbox);
  if (!Array.isArray(sandbox.sampleProperties)) throw new Error("Could not read sampleProperties.");
  return { source, dataEnd, properties: sandbox.sampleProperties };
}

function writeApp(source, dataEnd, properties) {
  const dataSource = `const sampleProperties = ${JSON.stringify(properties, null, 2)};\n\n`;
  fs.writeFileSync(appPath, dataSource + source.slice(dataEnd));
}

function readState() {
  if (!fs.existsSync(statePath)) return { runs: [] };
  try {
    return JSON.parse(fs.readFileSync(statePath, "utf8"));
  } catch {
    return { runs: [] };
  }
}

function previouslyCheckedIds() {
  if (force) return new Set();
  const state = readState();
  return new Set((state.runs || []).flatMap(run => (run.results || []).map(result => result.id)));
}

function isActiveProperty(property) {
  return !inactiveStatuses.has(String(property.status || "active").toLowerCase());
}

function isRealestateListing(property) {
  try {
    return new URL(property.listingUrl || "").hostname.toLowerCase().endsWith("realestate.com.au");
  } catch {
    return false;
  }
}

function hiddenPriceCandidates(properties) {
  const checkedIds = previouslyCheckedIds();
  return properties
    .map((property, index) => ({ property, displayId: property.displayId || String(index + 1).padStart(5, "0") }))
    .filter(({ property }) => !targetIds || targetIds.has(property.id))
    .filter(({ property }) => isActiveProperty(property))
    .filter(({ property }) => isRealestateListing(property))
    .filter(({ property }) => force || !property.price)
    .filter(({ property }) => force || !checkedIds.has(property.id))
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
          return new Promise((resolveSend, rejectSend) => pending.set(id, { resolve: resolveSend, reject: rejectSend }));
        },
        close() {
          socket.close();
        }
      });
    };
    socket.onerror = () => reject(new Error("Chrome websocket failed."));
  });
}

function compactAmount(value) {
  if (value >= 1000000) return `$${(value / 1000000).toLocaleString("en-AU", { maximumFractionDigits: 2 }).replace(/\.0$/, "")}m`;
  if (value >= 1000) return `$${Math.round(value / 1000).toLocaleString("en-AU")}k`;
  return `$${Math.round(value).toLocaleString("en-AU")}`;
}

function rangeLabel(min, max) {
  return max ? `${compactAmount(min)}-${compactAmount(max)}` : `${compactAmount(min)}+`;
}

function parseAmountToken(token) {
  const match = String(token || "").toLowerCase().replace(/,/g, "").match(/(\d+(?:\.\d+)?)(m|k)?/);
  if (!match) return 0;
  const number = Number(match[1]);
  if (!Number.isFinite(number)) return 0;
  if (match[2] === "m") return Math.round(number * 1000000);
  if (match[2] === "k") return Math.round(number * 1000);
  return Math.round(number);
}

function parsedHiddenRange(token) {
  const value = String(token || "").trim();
  if (!value) return null;

  const mapped = priceCodeMapping[value.toUpperCase()];
  if (mapped) {
    const [min, max] = mapped;
    return {
      code: value.toUpperCase(),
      min,
      max,
      price: max ? Math.round((min + max) / 2) : min,
      label: rangeLabel(min, max)
    };
  }

  const parts = value.toLowerCase().replace(/to/g, "_").split(/[_-]+/).map(parseAmountToken).filter(Boolean);
  if (!parts.length) return null;
  const min = Math.min(...parts);
  const max = parts.length > 1 ? Math.max(...parts) : null;
  return {
    code: value,
    min,
    max,
    price: max ? Math.round((min + max) / 2) : min,
    label: rangeLabel(min, max)
  };
}

function extractionExpression() {
  return `(${function() {
    const bodyText = document.body ? document.body.innerText || "" : "";
    const scriptText = Array.from(document.scripts).map(script => script.textContent || "").join("\n");
    const html = document.documentElement ? document.documentElement.innerHTML || "" : "";
    const combined = `${html}\n${scriptText}`;
    const codeMatches = Array.from(combined.matchAll(/marketing_price_range[\s\S]{0,260}?([0-9]{3}S|[0-9]+(?:\.\d+)?[mk](?:[_-](?:to[_-])?[0-9]+(?:\.\d+)?[mk])?)/gi));
    const displayMatch = combined.match(/price\\*"?\s*:\\*"?\s*{[\s\S]{0,180}?display\\*"?\s*:\\*"?\s*([^"\\]{2,80})/i);
    return {
      url: location.href,
      title: document.title || "",
      text: bodyText.slice(0, 1500),
      token: codeMatches[0] ? codeMatches[0][1] : "",
      snippet: codeMatches[0] ? codeMatches[0][0].slice(0, 300) : "",
      display: displayMatch ? displayMatch[1].replace(/\\\\+/g, "").trim() : ""
    };
  }.toString()})()`;
}

function pageProblem(page) {
  const text = `${page.url || ""}\n${page.title || ""}\n${page.text || ""}`.toLowerCase();
  if (/permission denied|access denied|request blocked|temporarily blocked|too many requests|captcha|verify you are human|are you a human/.test(text)) return "blocked";
  if (/off the market|page is no longer available|property is no longer available|listing is no longer available|page not found|404|this listing has been removed/.test(text)) return "off-market";
  return "";
}

async function extractHiddenPrice(client, property) {
  await client.send("Page.navigate", { url: property.listingUrl });
  await delay(pageWaitMs);
  const result = await client.send("Runtime.evaluate", {
    returnByValue: true,
    expression: extractionExpression()
  });
  const page = result.result.value || {};
  const problem = pageProblem(page);
  if (problem) return { reason: problem };
  const hiddenRange = parsedHiddenRange(page.token);
  if (!hiddenRange) return { reason: "no-hidden-price", page };
  return { reason: "ok", page, hiddenRange };
}

function appendUnavailableNote(property) {
  const checkedNote = "Exact listing appeared off market during hidden price update.";
  if (String(property.notes || "").includes(checkedNote)) return;
  property.notes = `${property.notes || ""} ${checkedNote}`.trim();
}

function patchResults(properties, results) {
  const byId = new Map(results.filter(result => result.hiddenRange).map(result => [result.id, result]));
  const offMarketIds = new Set(results.filter(result => result.reason === "off-market").map(result => result.id));
  const patched = [];

  properties.forEach(property => {
    if (offMarketIds.has(property.id)) {
      property.status = "unavailable";
      appendUnavailableNote(property);
      patched.push({
        id: property.id,
        title: property.title,
        status: "unavailable"
      });
      return;
    }

    const result = byId.get(property.id);
    if (!result) return;
    const range = result.hiddenRange;
    property.price = range.price;
    property.priceLabel = range.label;
    property.priceSource = "realestate_hidden_range";
    property.hiddenPriceCode = range.code;
    property.hiddenPriceRange = { min: range.min, max: range.max };
    property.hiddenPriceUpdatedAt = new Date().toISOString().slice(0, 10);
    patched.push({
      displayId: result.displayId,
      id: property.id,
      title: property.title,
      price: range.price,
      label: range.label,
      code: range.code
    });
  });

  return patched;
}

function writeState(results, patched) {
  const state = readState();
  state.runs.push({
    updatedAt: new Date().toISOString(),
    batchSize,
    pageWaitMs,
    targetIds: targetIds ? Array.from(targetIds) : undefined,
    results: results.map(result => ({
      displayId: result.displayId,
      id: result.id,
      title: result.title,
      token: result.hiddenRange?.code || result.token || "",
      label: result.hiddenRange?.label || "",
      price: result.hiddenRange?.price || 0,
      reason: result.reason || ""
    })),
    patched
  });
  fs.writeFileSync(statePath, JSON.stringify(state, null, 2));
}

async function main() {
  if (!fs.existsSync(chromePath)) throw new Error(`Chrome was not found at ${chromePath}`);
  const app = readApp();
  const targets = hiddenPriceCandidates(app.properties);
  if (!targets.length) {
    console.log("No hidden price candidates found.");
    return;
  }

  const chromeUserData = path.join(os.tmpdir(), `codex-hidden-prices-${Date.now()}`);
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
    for (const target of targets) {
      const { property, displayId } = target;
      console.log(`${displayId} ${property.id}: checking hidden price`);
      const result = await extractHiddenPrice(client, property);
      results.push({
        displayId,
        id: property.id,
        title: property.title,
        listingUrl: property.listingUrl,
        token: result.page?.token || "",
        hiddenRange: result.hiddenRange,
        reason: result.reason
      });
      const message = result.hiddenRange ? `${result.hiddenRange.label} (${result.hiddenRange.code})` : result.reason;
      console.log(`${displayId} ${property.id}: ${message}`);
    }

    client.close();
    const patched = patchResults(app.properties, results);
    if (patched.length) writeApp(app.source, app.dataEnd, app.properties);
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
