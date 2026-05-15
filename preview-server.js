const http = require("http");
const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");
const vm = require("vm");

const root = __dirname;
const port = Number(process.env.PORT || 4173);
const statusPath = path.join(root, "refresh-status.json");
const logPath = path.join(root, "refresh-listings.log");
const appPath = path.join(root, "app.js");
const galleryLogPath = path.join(root, "gallery-update-run.log");
const galleryUpdaterPath = path.join(root, "scripts", "update-property-galleries.js");
const suburbStatePath = path.join(root, "suburb-search-state.json");
const largeStatusPath = path.join(root, "large-refresh-status.json");
const largeLogPath = path.join(root, "large-refresh-listings.log");
const largeStatePath = path.join(root, "large-search-state.json");
const codexPath = "C:\\Users\\User\\AppData\\Local\\OpenAI\\Codex\\bin\\codex.exe";
const nodePath = "C:\\Users\\User\\AppData\\Local\\OpenAI\\Codex\\bin\\node.exe";
const listingImageCache = new Map();
const listingImagesCache = new Map();
let refreshProcess = null;
let refreshTimeout = null;
let refreshStoppedByTimeout = false;
let activeSearchArea = null;
let largeRefreshProcess = null;
let largeRefreshTimeout = null;
let largeRefreshStoppedByTimeout = false;
let targetedGalleryProcess = null;
let pendingTargetedGalleryIds = new Set();
let activeLargeSearchArea = null;
let autoRefreshTimer = null;
let largeAutoRefreshTimer = null;
let lastAutoRefreshAt = 0;
let lastLargeAutoRefreshAt = 0;
let nextAutoRefreshAt = null;
let nextLargeAutoRefreshAt = null;
const autoRefreshIntervalMs = 5 * 60 * 1000;
const standardRefreshTimeoutMs = 2 * 60 * 1000;
const priorityRefreshTimeoutMs = standardRefreshTimeoutMs * 5;
const saveChangesGraceMs = 4 * 60 * 1000;
const prioritySearchAreaKeys = new Set([
  "Palm Beach|QLD", "Mermaid Beach|QLD", "Main Beach|QLD", "Surfers Paradise|QLD", "Broadbeach|QLD", "Bilinga|QLD", "Tugun|QLD", "Coolangatta|QLD", "Currumbin|QLD", "Burleigh Heads|QLD",
  "Peregian Beach|QLD", "Marcus Beach|QLD", "Sunshine Beach|QLD", "Noosa Heads|QLD", "Warana|QLD", "Bokarina|QLD", "Wurtulla|QLD", "Golden Beach|QLD", "Beachmere|QLD",
  "Whale Beach|NSW", "Palm Beach|NSW", "Freshwater|NSW", "Dee Why|NSW", "Wamberal|NSW", "Pearl Beach|NSW", "Umina Beach|NSW", "Ettalong Beach|NSW", "The Entrance North|NSW", "Blue Bay|NSW", "Caves Beach|NSW", "Stockton|NSW", "Kingscliff|NSW", "Cabarita Beach|NSW", "Pottsville|NSW", "New Brighton|NSW", "Barrack Point|NSW", "Maloneys Beach|NSW",
  "Cottesloe|WA", "North Coogee|WA", "Halls Head|WA", "Singleton|WA", "Waikiki|WA", "Safety Bay|WA", "Wannanup|WA", "Geographe|WA", "Busselton|WA", "Siesta Park|WA", "Lancelin|WA", "Two Rocks|WA",
  "Aspendale|VIC", "Beaumaris|VIC", "Frankston|VIC", "Safety Beach|VIC", "Balnarring Beach|VIC", "Inverloch|VIC",
  "Semaphore|SA", "Semaphore South|SA", "Largs Bay|SA", "Taperoo|SA", "North Haven|SA", "Outer Harbor|SA", "West Lakes Shore|SA", "Tennyson|SA", "Grange|SA", "Henley Beach|SA", "Henley Beach South|SA", "West Beach|SA", "Glenelg North|SA", "Glenelg|SA", "Glenelg South|SA", "Somerton Park|SA", "Hove|SA", "Brighton|SA", "Seacliff|SA", "Marino|SA", "Hallett Cove|SA", "O'Sullivan Beach|SA", "Christies Beach|SA", "Port Noarlunga|SA", "Port Noarlunga South|SA", "Moana|SA", "Maslin Beach|SA", "Aldinga Beach|SA", "Sellicks Beach|SA", "Normanville|SA", "Carrickalinga|SA", "Second Valley|SA", "Cape Jervis|SA"
]);
const suburbSearchAreas = [
  { suburb: "Semaphore", state: "SA", city: "Adelaide", priority: true },
  { suburb: "Semaphore South", state: "SA", city: "Adelaide", priority: true },
  { suburb: "Largs Bay", state: "SA", city: "Adelaide", priority: true },
  { suburb: "Taperoo", state: "SA", city: "Adelaide", priority: true },
  { suburb: "North Haven", state: "SA", city: "Adelaide", priority: true },
  { suburb: "Outer Harbor", state: "SA", city: "Adelaide", priority: true },
  { suburb: "West Lakes Shore", state: "SA", city: "Adelaide", priority: true },
  { suburb: "Tennyson", state: "SA", city: "Adelaide", priority: true },
  { suburb: "Grange", state: "SA", city: "Adelaide", priority: true },
  { suburb: "Henley Beach", state: "SA", city: "Adelaide", priority: true },
  { suburb: "Henley Beach South", state: "SA", city: "Adelaide", priority: true },
  { suburb: "West Beach", state: "SA", city: "Adelaide", priority: true },
  { suburb: "Glenelg North", state: "SA", city: "Adelaide", priority: true },
  { suburb: "Glenelg", state: "SA", city: "Adelaide", priority: true },
  { suburb: "Glenelg South", state: "SA", city: "Adelaide", priority: true },
  { suburb: "Somerton Park", state: "SA", city: "Adelaide", priority: true },
  { suburb: "Hove", state: "SA", city: "Adelaide", priority: true },
  { suburb: "Brighton", state: "SA", city: "Adelaide", priority: true },
  { suburb: "Seacliff", state: "SA", city: "Adelaide", priority: true },
  { suburb: "Marino", state: "SA", city: "Adelaide", priority: true },
  { suburb: "Hallett Cove", state: "SA", city: "Adelaide", priority: true },
  { suburb: "O'Sullivan Beach", state: "SA", city: "Adelaide", priority: true },
  { suburb: "Christies Beach", state: "SA", city: "Adelaide", priority: true },
  { suburb: "Port Noarlunga", state: "SA", city: "Adelaide", priority: true },
  { suburb: "Port Noarlunga South", state: "SA", city: "Adelaide", priority: true },
  { suburb: "Moana", state: "SA", city: "Adelaide", priority: true },
  { suburb: "Maslin Beach", state: "SA", city: "Adelaide", priority: true },
  { suburb: "Aldinga Beach", state: "SA", city: "Adelaide", priority: true },
  { suburb: "Sellicks Beach", state: "SA", city: "Adelaide", priority: true },
  { suburb: "Normanville", state: "SA", city: "Adelaide", priority: true },
  { suburb: "Carrickalinga", state: "SA", city: "Adelaide", priority: true },
  { suburb: "Second Valley", state: "SA", city: "Adelaide", priority: true },
  { suburb: "Cape Jervis", state: "SA", city: "Adelaide", priority: true },
  { suburb: "Port Victoria", state: "SA", city: "Adelaide" },
  { suburb: "Moonta Bay", state: "SA", city: "Adelaide" },
  { suburb: "Wallaroo", state: "SA", city: "Adelaide" },
  { suburb: "Whyalla", state: "SA", city: "Adelaide" },
  { suburb: "Port Lincoln", state: "SA", city: "Adelaide" },
  { suburb: "Coffin Bay", state: "SA", city: "Adelaide" },
  { suburb: "Elliston", state: "SA", city: "Adelaide" },
  { suburb: "Streaky Bay", state: "SA", city: "Adelaide" },
  { suburb: "Ceduna", state: "SA", city: "Adelaide" },
  { suburb: "Esperance", state: "WA", city: "Perth" },
  { suburb: "Hopetoun", state: "WA", city: "Perth" },
  { suburb: "Bremer Bay", state: "WA", city: "Perth" },
  { suburb: "Albany", state: "WA", city: "Perth" },
  { suburb: "Middleton Beach", state: "WA", city: "Perth" },
  { suburb: "Denmark", state: "WA", city: "Perth" },
  { suburb: "Augusta", state: "WA", city: "Perth" },
  { suburb: "Prevelly", state: "WA", city: "Perth" },
  { suburb: "Gnarabup", state: "WA", city: "Perth" },
  { suburb: "Dunsborough", state: "WA", city: "Perth" },
  { suburb: "Busselton", state: "WA", city: "Perth", priority: true },
  { suburb: "Geographe", state: "WA", city: "Perth", priority: true },
  { suburb: "Siesta Park", state: "WA", city: "Perth", priority: true },
  { suburb: "Bunbury", state: "WA", city: "Perth", priority: true },
  { suburb: "Dalyellup", state: "WA", city: "Perth", priority: true },
  { suburb: "Mandurah", state: "WA", city: "Perth", priority: true },
  { suburb: "Halls Head", state: "WA", city: "Perth", priority: true },
  { suburb: "Singleton", state: "WA", city: "Perth", priority: true },
  { suburb: "Waikiki", state: "WA", city: "Perth", priority: true },
  { suburb: "Safety Bay", state: "WA", city: "Perth", priority: true },
  { suburb: "Rockingham", state: "WA", city: "Perth", priority: true },
  { suburb: "North Coogee", state: "WA", city: "Perth", priority: true },
  { suburb: "Cottesloe", state: "WA", city: "Perth", priority: true },
  { suburb: "Scarborough", state: "WA", city: "Perth", priority: true },
  { suburb: "Trigg", state: "WA", city: "Perth", priority: true },
  { suburb: "Hillarys", state: "WA", city: "Perth", priority: true },
  { suburb: "Mindarie", state: "WA", city: "Perth", priority: true },
  { suburb: "Two Rocks", state: "WA", city: "Perth", priority: true },
  { suburb: "Lancelin", state: "WA", city: "Perth", priority: true },
  { suburb: "Jurien Bay", state: "WA", city: "Perth" },
  { suburb: "Leeman", state: "WA", city: "Perth" },
  { suburb: "Geraldton", state: "WA", city: "Perth" },
  { suburb: "Bluff Point", state: "WA", city: "Perth" },
  { suburb: "Sunset Beach", state: "WA", city: "Perth" },
  { suburb: "Mackay", state: "QLD", city: "Mackay", priority: true },
  { suburb: "Slade Point", state: "QLD", city: "Mackay", priority: true },
  { suburb: "Blacks Beach", state: "QLD", city: "Mackay", priority: true },
  { suburb: "Lammermoor", state: "QLD", city: "Rockhampton" },
  { suburb: "Yeppoon", state: "QLD", city: "Rockhampton" },
  { suburb: "Zilzie", state: "QLD", city: "Rockhampton" },
  { suburb: "Agnes Water", state: "QLD", city: "Brisbane" },
  { suburb: "Rules Beach", state: "QLD", city: "Bundaberg" },
  { suburb: "Moore Park Beach", state: "QLD", city: "Bundaberg" },
  { suburb: "Bargara", state: "QLD", city: "Bundaberg" },
  { suburb: "Woodgate", state: "QLD", city: "Bundaberg" },
  { suburb: "Toogoom", state: "QLD", city: "Hervey Bay" },
  { suburb: "Dundowran Beach", state: "QLD", city: "Hervey Bay" },
  { suburb: "Noosa Heads", state: "QLD", city: "Brisbane", priority: true },
  { suburb: "Sunshine Beach", state: "QLD", city: "Brisbane", priority: true },
  { suburb: "Peregian Beach", state: "QLD", city: "Brisbane", priority: true },
  { suburb: "Marcus Beach", state: "QLD", city: "Brisbane", priority: true },
  { suburb: "Coolum Beach", state: "QLD", city: "Brisbane", priority: true },
  { suburb: "Maroochydore", state: "QLD", city: "Brisbane", priority: true },
  { suburb: "Mooloolaba", state: "QLD", city: "Brisbane", priority: true },
  { suburb: "Warana", state: "QLD", city: "Brisbane", priority: true },
  { suburb: "Bokarina", state: "QLD", city: "Brisbane", priority: true },
  { suburb: "Wurtulla", state: "QLD", city: "Brisbane", priority: true },
  { suburb: "Golden Beach", state: "QLD", city: "Brisbane", priority: true },
  { suburb: "Beachmere", state: "QLD", city: "Brisbane", priority: true },
  { suburb: "Palm Beach", state: "QLD", city: "Gold Coast", priority: true },
  { suburb: "Mermaid Beach", state: "QLD", city: "Gold Coast", priority: true },
  { suburb: "Main Beach", state: "QLD", city: "Gold Coast", priority: true },
  { suburb: "Surfers Paradise", state: "QLD", city: "Gold Coast", priority: true },
  { suburb: "Broadbeach", state: "QLD", city: "Gold Coast", priority: true },
  { suburb: "Burleigh Heads", state: "QLD", city: "Gold Coast", priority: true },
  { suburb: "Currumbin", state: "QLD", city: "Gold Coast", priority: true },
  { suburb: "Tugun", state: "QLD", city: "Gold Coast", priority: true },
  { suburb: "Bilinga", state: "QLD", city: "Gold Coast", priority: true },
  { suburb: "Coolangatta", state: "QLD", city: "Gold Coast", priority: true },
  { suburb: "Kingscliff", state: "NSW", city: "Gold Coast", priority: true },
  { suburb: "Cabarita Beach", state: "NSW", city: "Gold Coast", priority: true },
  { suburb: "Pottsville", state: "NSW", city: "Gold Coast", priority: true },
  { suburb: "New Brighton", state: "NSW", city: "Gold Coast", priority: true },
  { suburb: "Byron Bay", state: "NSW", city: "Gold Coast", priority: true },
  { suburb: "Broken Head", state: "NSW", city: "Gold Coast", priority: true },
  { suburb: "Lennox Head", state: "NSW", city: "Gold Coast", priority: true },
  { suburb: "Ballina", state: "NSW", city: "Gold Coast", priority: true },
  { suburb: "Yamba", state: "NSW", city: "Gold Coast" },
  { suburb: "Brooms Head", state: "NSW", city: "Gold Coast" },
  { suburb: "Coffs Harbour", state: "NSW", city: "Sydney" },
  { suburb: "Port Macquarie", state: "NSW", city: "Sydney" },
  { suburb: "Diamond Beach", state: "NSW", city: "Sydney" },
  { suburb: "Blueys Beach", state: "NSW", city: "Sydney" },
  { suburb: "Forster", state: "NSW", city: "Sydney" },
  { suburb: "Stockton", state: "NSW", city: "Newcastle", priority: true },
  { suburb: "Caves Beach", state: "NSW", city: "Newcastle", priority: true },
  { suburb: "The Entrance North", state: "NSW", city: "Sydney", priority: true },
  { suburb: "Blue Bay", state: "NSW", city: "Sydney", priority: true },
  { suburb: "Wamberal", state: "NSW", city: "Sydney", priority: true },
  { suburb: "Terrigal", state: "NSW", city: "Sydney", priority: true },
  { suburb: "Ettalong Beach", state: "NSW", city: "Sydney", priority: true },
  { suburb: "Umina Beach", state: "NSW", city: "Sydney", priority: true },
  { suburb: "Pearl Beach", state: "NSW", city: "Sydney", priority: true },
  { suburb: "Palm Beach", state: "NSW", city: "Sydney", priority: true },
  { suburb: "Whale Beach", state: "NSW", city: "Sydney", priority: true },
  { suburb: "Dee Why", state: "NSW", city: "Sydney", priority: true },
  { suburb: "Freshwater", state: "NSW", city: "Sydney", priority: true },
  { suburb: "Manly", state: "NSW", city: "Sydney", priority: true },
  { suburb: "Cronulla", state: "NSW", city: "Sydney", priority: true },
  { suburb: "Wollongong", state: "NSW", city: "Sydney", priority: true },
  { suburb: "Shellharbour", state: "NSW", city: "Sydney", priority: true },
  { suburb: "Barrack Point", state: "NSW", city: "Sydney", priority: true },
  { suburb: "Maloneys Beach", state: "NSW", city: "Canberra", priority: true },
  { suburb: "Merimbula", state: "NSW", city: "Canberra" },
  { suburb: "Eden", state: "NSW", city: "Canberra" },
  { suburb: "Mallacoota", state: "VIC", city: "Melbourne" },
  { suburb: "Lakes Entrance", state: "VIC", city: "Melbourne" },
  { suburb: "Inverloch", state: "VIC", city: "Melbourne", priority: true },
  { suburb: "Phillip Island", state: "VIC", city: "Melbourne", priority: true },
  { suburb: "Balnarring Beach", state: "VIC", city: "Melbourne", priority: true },
  { suburb: "Safety Beach", state: "VIC", city: "Melbourne", priority: true },
  { suburb: "Frankston", state: "VIC", city: "Melbourne", priority: true },
  { suburb: "Aspendale", state: "VIC", city: "Melbourne", priority: true },
  { suburb: "Beaumaris", state: "VIC", city: "Melbourne", priority: true },
  { suburb: "Port Melbourne", state: "VIC", city: "Melbourne", priority: true },
  { suburb: "Williamstown", state: "VIC", city: "Melbourne", priority: true },
  { suburb: "Geelong", state: "VIC", city: "Melbourne", priority: true },
  { suburb: "Torquay", state: "VIC", city: "Melbourne", priority: true },
  { suburb: "Anglesea", state: "VIC", city: "Melbourne", priority: true },
  { suburb: "Lorne", state: "VIC", city: "Melbourne", priority: true },
  { suburb: "Apollo Bay", state: "VIC", city: "Melbourne" },
  { suburb: "Warrnambool", state: "VIC", city: "Melbourne" },
  { suburb: "Portland", state: "VIC", city: "Melbourne" },
  { suburb: "Mount Gambier", state: "SA", city: "Adelaide" },
  { suburb: "Robe", state: "SA", city: "Adelaide" },
  { suburb: "Kingston SE", state: "SA", city: "Adelaide" },
  { suburb: "Victor Harbor", state: "SA", city: "Adelaide", priority: true },
  { suburb: "Middleton", state: "SA", city: "Adelaide", priority: true }
];
const largeSearchAreas = [
  { region: "Adelaide Hills and Fleurieu acreage", state: "SA", city: "Adelaide", priority: true },
  { region: "Barossa Valley and Clare Valley acreage", state: "SA", city: "Adelaide", priority: true },
  { region: "Limestone Coast rural holdings", state: "SA", city: "Adelaide" },
  { region: "Eyre Peninsula rural and coastal acreage", state: "SA", city: "Adelaide" },
  { region: "South West WA lifestyle acreage", state: "WA", city: "Perth", priority: true },
  { region: "Perth fringe acreage", state: "WA", city: "Perth", priority: true },
  { region: "Great Southern WA rural holdings", state: "WA", city: "Perth" },
  { region: "Sunshine Coast hinterland acreage", state: "QLD", city: "Brisbane", priority: true },
  { region: "Gold Coast hinterland acreage", state: "QLD", city: "Gold Coast", priority: true },
  { region: "Northern Rivers acreage", state: "NSW", city: "Gold Coast", priority: true },
  { region: "Hunter Valley and Central Coast acreage", state: "NSW", city: "Sydney", priority: true },
  { region: "Sydney fringe rural holdings", state: "NSW", city: "Sydney", priority: true },
  { region: "Mornington Peninsula and Gippsland acreage", state: "VIC", city: "Melbourne", priority: true },
  { region: "Geelong, Surf Coast and Bellarine acreage", state: "VIC", city: "Melbourne", priority: true },
  { region: "Western Victoria rural lifestyle holdings", state: "VIC", city: "Melbourne" }
];
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".csv": "text/csv; charset=utf-8",
  ".md": "text/markdown; charset=utf-8"
};

function writeJson(response, statusCode, payload) {
  response.writeHead(statusCode, { "Content-Type": "application/json; charset=utf-8" });
  response.end(JSON.stringify(payload));
}

function readRefreshStatus() {
  try {
    return JSON.parse(fs.readFileSync(statusPath, "utf8").replace(/^\uFEFF/, ""));
  } catch {
    return { state: "idle", message: "No manual refresh has run yet." };
  }
}

function writeRefreshStatus(status) {
  fs.writeFileSync(statusPath, JSON.stringify({ ...status, nextAutoRefreshAt, updatedAt: new Date().toISOString() }, null, 2));
}

function readLargeRefreshStatus() {
  try {
    return JSON.parse(fs.readFileSync(largeStatusPath, "utf8").replace(/^\uFEFF/, ""));
  } catch {
    return { state: "idle", message: "No large-property refresh has run yet." };
  }
}

function writeLargeRefreshStatus(status) {
  fs.writeFileSync(largeStatusPath, JSON.stringify({ ...status, nextAutoRefreshAt: nextLargeAutoRefreshAt, updatedAt: new Date().toISOString() }, null, 2));
}

function readPropertyIds() {
  try {
    const source = fs.readFileSync(appPath, "utf8");
    const start = source.indexOf("const sampleProperties = [");
    const end = source.indexOf("];", start) + 2;
    if (start === -1 || end <= start) return null;
    const sandbox = {};
    vm.runInNewContext(source.slice(start, end).replace("const sampleProperties", "sampleProperties"), sandbox);
    return new Set((sandbox.sampleProperties || []).map(property => String(property.id)).filter(Boolean));
  } catch {
    return null;
  }
}

function queueNewListingGalleryRefresh(previousIds, label, sourceLogPath) {
  if (!previousIds) return;
  const currentIds = readPropertyIds();
  if (!currentIds) {
    fs.appendFileSync(sourceLogPath, `\n[${new Date().toISOString()}] Could not inspect new property IDs for targeted gallery update.\n`);
    return;
  }

  const addedIds = [...currentIds].filter(id => !previousIds.has(id));
  if (!addedIds.length) return;
  fs.appendFileSync(sourceLogPath, `\n[${new Date().toISOString()}] ${label} added ${addedIds.length} new records; queueing targeted gallery update for ${addedIds.join(", ")}\n`);
  queueTargetedGalleryRefresh(addedIds, label);
}

function queueTargetedGalleryRefresh(ids, label) {
  ids.map(String).filter(Boolean).forEach(id => pendingTargetedGalleryIds.add(id));
  if (targetedGalleryProcess) return;
  startQueuedTargetedGalleryRefresh(label);
}

function startQueuedTargetedGalleryRefresh(label) {
  const ids = [...pendingTargetedGalleryIds];
  pendingTargetedGalleryIds = new Set();
  if (!ids.length) return;

  const portOffset = Math.floor(Math.random() * 500);
  fs.appendFileSync(galleryLogPath, `\n[${new Date().toISOString()}] Targeted gallery update started for ${label}: ${ids.join(", ")}\n`);
  targetedGalleryProcess = spawn(nodePath, [galleryUpdaterPath], {
    cwd: root,
    env: {
      ...process.env,
      TARGET_IDS: JSON.stringify(ids),
      FORCE_GALLERY_UPDATE: "1",
      BATCH_SIZE: String(ids.length),
      PERMISSION_DENIED_RETRY_LIMIT: "0",
      PERMISSION_DENIED_PAUSE_MS: "0",
      CHROME_DEBUG_PORT: String(9300 + portOffset)
    },
    windowsHide: true,
    stdio: ["ignore", "pipe", "pipe"]
  });

  targetedGalleryProcess.stdout.on("data", chunk => fs.appendFileSync(galleryLogPath, chunk));
  targetedGalleryProcess.stderr.on("data", chunk => fs.appendFileSync(galleryLogPath, chunk));
  targetedGalleryProcess.on("error", error => {
    fs.appendFileSync(galleryLogPath, `[${new Date().toISOString()}] Targeted gallery update failed to start: ${error.message}\n`);
    targetedGalleryProcess = null;
    if (pendingTargetedGalleryIds.size) startQueuedTargetedGalleryRefresh("queued new records");
  });
  targetedGalleryProcess.on("exit", code => {
    fs.appendFileSync(galleryLogPath, `[${new Date().toISOString()}] Targeted gallery update finished with code ${code}\n`);
    targetedGalleryProcess = null;
    if (pendingTargetedGalleryIds.size) startQueuedTargetedGalleryRefresh("queued new records");
  });
}

function formatSearchArea(area) {
  if (!area) return "";
  return `${area.suburb}, ${area.state}`;
}

function formatLargeSearchArea(area) {
  if (!area) return "";
  return `${area.region}, ${area.state}`;
}

function searchAreaKey(area) {
  return area ? `${area.suburb}|${area.state}` : "";
}

function isPrioritySearchArea(area) {
  return Boolean(area?.priority) || prioritySearchAreaKeys.has(searchAreaKey(area));
}

function searchDurationMs(area) {
  return isPrioritySearchArea(area) ? priorityRefreshTimeoutMs : standardRefreshTimeoutMs;
}

function formatDuration(ms) {
  const minutes = Math.round(ms / 60000);
  return `${minutes} minute${minutes === 1 ? "" : "s"}`;
}

function processTimeoutMs(searchTimeoutMs) {
  return searchTimeoutMs + saveChangesGraceMs;
}

function isSupportedListingHost(url) {
  try {
    const host = new URL(url).hostname.toLowerCase();
    return host.endsWith("realestate.com.au") || host.endsWith("domain.com.au") || host.endsWith("homely.com.au");
  } catch {
    return false;
  }
}

function decodeHtml(value) {
  return String(value || "")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#x2F;/g, "/")
    .replace(/\\/g, "");
}

function uniqueImageUrls(images) {
  const seen = new Set();
  return images
    .map(decodeHtml)
    .map(url => url.trim())
    .filter(url => /^https?:\/\//i.test(url))
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
      return !/property-image|project-image|placeholder|no-image|logo|favicon|sprite/i.test(url);
    });
}

function pickListingImages(html) {
  const candidates = [];
  const patterns = [
    /<meta[^>]+property=["']og:image(?::secure_url)?["'][^>]+content=["']([^"']+)["']/gi,
    /<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image(?::secure_url)?["']/gi,
    /<meta[^>]+name=["']twitter:image["'][^>]+content=["']([^"']+)["']/gi,
    /<meta[^>]+content=["']([^"']+)["'][^>]+name=["']twitter:image["']/gi,
    /https?:\/\/i2\.au\.reastatic\.net\/[^"'\\\s<>)]+/gi,
    /https?:\/\/rimh2\.domainstatic\.com\.au\/[^"'\\\s<>)]+/gi,
    /https?:\/\/www\.homely\.com\.au\/img-variant\/[^"'\\\s<>)]+/gi
  ];

  patterns.forEach(pattern => {
    for (const match of html.matchAll(pattern)) {
      candidates.push(decodeHtml(match[1] || match[0]));
    }
  });

  return uniqueImageUrls(candidates);
}

function pickListingImage(html) {
  return pickListingImages(html)[0] || "";
}

async function fetchListingHtml(listingUrl) {
  if (!isSupportedListingHost(listingUrl)) return "";
  try {
    const response = await fetch(listingUrl, {
      headers: {
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36",
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8"
      }
    });
    return response.ok ? await response.text() : "";
  } catch {
    return "";
  }
}

async function resolveListingImages(listingUrl) {
  if (!isSupportedListingHost(listingUrl)) return [];
  if (listingImagesCache.has(listingUrl)) return listingImagesCache.get(listingUrl);
  const html = await fetchListingHtml(listingUrl);
  const images = html ? pickListingImages(html) : [];
  listingImagesCache.set(listingUrl, images);
  if (images[0]) listingImageCache.set(listingUrl, images[0]);
  return images;
}

async function resolveListingImage(listingUrl) {
  if (!isSupportedListingHost(listingUrl)) return "";
  if (listingImageCache.has(listingUrl)) return listingImageCache.get(listingUrl);
  const image = (await resolveListingImages(listingUrl))[0] || "";
  listingImageCache.set(listingUrl, image);
  return image;
}

function readRequestJson(request) {
  return new Promise(resolve => {
    let body = "";
    request.on("data", chunk => {
      body += chunk;
      if (body.length > 1024 * 1024) request.destroy();
    });
    request.on("end", () => {
      try {
        resolve(JSON.parse(body || "{}"));
      } catch {
        resolve({});
      }
    });
    request.on("error", () => resolve({}));
  });
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
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === quote) {
        quote = "";
      }
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

function findArrayEnd(source, start) {
  const open = source.indexOf("[", start);
  if (open === -1) return -1;
  let depth = 0;
  let quote = "";
  let escaped = false;
  for (let index = open; index < source.length; index += 1) {
    const char = source[index];
    if (quote) {
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === quote) {
        quote = "";
      }
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

function formatImagesProperty(images) {
  return `    images: [\n${images.map(image => `      ${JSON.stringify(image)}`).join(",\n")}\n    ],`;
}

function updatePropertyObjectImages(objectText, images) {
  const imagesText = formatImagesProperty(images);
  const imagesMatch = /\n    images\s*:/.exec(objectText);
  if (imagesMatch) {
    const end = findArrayEnd(objectText, imagesMatch.index);
    if (end !== -1) {
      const commaEnd = objectText[end] === "," ? end + 1 : end;
      return objectText.slice(0, imagesMatch.index) + "\n" + imagesText + objectText.slice(commaEnd);
    }
  }

  const listingIndex = objectText.search(/\n    listingUrl\s*:/);
  if (listingIndex !== -1) {
    return objectText.slice(0, listingIndex) + "\n" + imagesText + objectText.slice(listingIndex);
  }

  return objectText.replace(/\n  }$/, `,\n${imagesText}\n  }`);
}

function getPropertyById(id) {
  const source = fs.readFileSync(path.join(root, "app.js"), "utf8");
  const range = findPropertyObjectRange(source, id);
  if (!range) return null;
  const objectText = source.slice(range.start, range.end);
  try {
    return { range, objectText, property: Function(`"use strict"; return (${objectText});`)() };
  } catch {
    return null;
  }
}

async function refreshFavouriteImages(ids) {
  const appPath = path.join(root, "app.js");
  let source = fs.readFileSync(appPath, "utf8");
  const results = [];
  const galleries = {};

  for (const id of ids) {
    const current = getPropertyById(id);
    if (!current?.property?.listingUrl) {
      results.push({ id, status: "skipped", reason: "No exact listing URL found." });
      continue;
    }

    const foundImages = await resolveListingImages(current.property.listingUrl);
    const images = uniqueImageUrls([current.property.image, ...(current.property.images || []), ...foundImages]);
    if (images.length <= (current.property.images || [current.property.image].filter(Boolean)).length) {
      results.push({ id, status: "unchanged", imageCount: images.length });
      if (images.length) galleries[id] = images;
      continue;
    }

    const range = findPropertyObjectRange(source, id);
    if (!range) {
      results.push({ id, status: "skipped", reason: "Record moved during update." });
      continue;
    }
    const objectText = source.slice(range.start, range.end);
    const updatedObject = updatePropertyObjectImages(objectText, images);
    source = source.slice(0, range.start) + updatedObject + source.slice(range.end);
    galleries[id] = images;
    results.push({ id, status: "updated", imageCount: images.length, added: images.length - (current.property.images || []).length });
  }

  if (results.some(result => result.status === "updated")) {
    fs.writeFileSync(appPath, source);
  }

  return {
    checked: ids.length,
    updated: results.filter(result => result.status === "updated").length,
    galleries,
    results
  };
}

function readSuburbSearchState() {
  try {
    const state = JSON.parse(fs.readFileSync(suburbStatePath, "utf8").replace(/^\uFEFF/, ""));
    return Number.isInteger(state.index) ? state : { index: 0 };
  } catch {
    return { index: 0 };
  }
}

function writeSuburbSearchState(state) {
  fs.writeFileSync(suburbStatePath, JSON.stringify(state, null, 2));
}

function readLargeSearchState() {
  try {
    const state = JSON.parse(fs.readFileSync(largeStatePath, "utf8").replace(/^\uFEFF/, ""));
    return Number.isInteger(state.index) ? state : { index: 0 };
  } catch {
    return { index: 0 };
  }
}

function writeLargeSearchState(state) {
  fs.writeFileSync(largeStatePath, JSON.stringify(state, null, 2));
}

function currentSuburbSearchArea() {
  const state = readSuburbSearchState();
  const index = ((state.index % suburbSearchAreas.length) + suburbSearchAreas.length) % suburbSearchAreas.length;
  return { ...suburbSearchAreas[index], index, total: suburbSearchAreas.length };
}

function advanceSuburbSearchArea() {
  const area = currentSuburbSearchArea();
  const nextIndex = (area.index + 1) % suburbSearchAreas.length;
  writeSuburbSearchState({
    index: nextIndex,
    previousArea: formatSearchArea(area),
    nextArea: formatSearchArea({ ...suburbSearchAreas[nextIndex] }),
    updatedAt: new Date().toISOString()
  });
}

function currentLargeSearchArea() {
  const state = readLargeSearchState();
  const index = ((state.index % largeSearchAreas.length) + largeSearchAreas.length) % largeSearchAreas.length;
  return { ...largeSearchAreas[index], index, total: largeSearchAreas.length };
}

function advanceLargeSearchArea() {
  const area = currentLargeSearchArea();
  const nextIndex = (area.index + 1) % largeSearchAreas.length;
  writeLargeSearchState({
    index: nextIndex,
    previousArea: formatLargeSearchArea(area),
    nextArea: formatLargeSearchArea({ ...largeSearchAreas[nextIndex] }),
    updatedAt: new Date().toISOString()
  });
}

function withSearchAreaStatus(status) {
  const area = activeSearchArea || currentSuburbSearchArea();
  const durationMs = searchDurationMs(area);
  return {
    ...status,
    searchArea: formatSearchArea(area),
    searchAreaPosition: area.index + 1,
    searchAreaTotal: area.total,
    searchDurationMinutes: Math.round(durationMs / 60000),
    searchPriority: isPrioritySearchArea(area),
    nextSearchArea: formatSearchArea(currentSuburbSearchArea())
  };
}

function withLargeSearchAreaStatus(status) {
  const area = activeLargeSearchArea || currentLargeSearchArea();
  const durationMs = searchDurationMs(area);
  return {
    ...status,
    searchArea: formatLargeSearchArea(area),
    searchAreaPosition: area.index + 1,
    searchAreaTotal: area.total,
    searchDurationMinutes: Math.round(durationMs / 60000),
    searchPriority: isPrioritySearchArea(area),
    nextSearchArea: formatLargeSearchArea(currentLargeSearchArea())
  };
}

function inferProgressMessage() {
  let log = "";
  try {
    log = fs.readFileSync(logPath, "utf8");
  } catch {
    return "Searching and verifying listings...";
  }

  const latestRun = log.split(/\n\n\[/).pop() || log;
  const urls = new Set([...(latestRun.match(/https:\/\/(?:www\.)?(?:realestate\.com\.au|homely\.com\.au|domain\.com\.au)\/[^\s"')]+/gi) || [])]);
  const candidateCount = Math.min(urls.size, 10);
  const patchSignals = (latestRun.match(/Success\. Updated the following files|app\.js|listingUrl:/g) || []).length;

  const areaText = activeSearchArea ? ` in ${formatSearchArea(activeSearchArea)}` : "";
  if (patchSignals > 0) return `Verifying candidates${areaText}; ${candidateCount}/10 possible listings found...`;
  if (candidateCount > 0) return `Found ${candidateCount}/10 possible listings${areaText}; verifying quality...`;
  if (/web search:/i.test(latestRun)) return `Searching listing sites${areaText}; 0/10 verified so far...`;
  return "Searching and verifying listings...";
}

function inferLargeProgressMessage() {
  let log = "";
  try {
    log = fs.readFileSync(largeLogPath, "utf8");
  } catch {
    return "Searching large land listings...";
  }

  const latestRun = log.split(/\n\n\[/).pop() || log;
  const urls = new Set([...(latestRun.match(/https:\/\/(?:www\.)?(?:realestate\.com\.au|homely\.com\.au|domain\.com\.au)\/[^\s"')]+/gi) || [])]);
  const candidateCount = Math.min(urls.size, 10);
  const patchSignals = (latestRun.match(/Success\. Updated the following files|app\.js|listingUrl:/g) || []).length;
  const areaText = activeLargeSearchArea ? ` in ${formatLargeSearchArea(activeLargeSearchArea)}` : "";
  if (patchSignals > 0) return `Verifying large-block candidates${areaText}; ${candidateCount}/10 possible listings found...`;
  if (candidateCount > 0) return `Found ${candidateCount}/10 possible large blocks${areaText}; verifying size...`;
  if (/web search:/i.test(latestRun)) return `Searching large land listings${areaText}; 0/10 verified so far...`;
  return "Searching large land listings...";
}

function startListingRefresh(response, scope = "national", mode = "manual") {
  if (refreshProcess) {
    if (response) writeJson(response, 202, readRefreshStatus());
    return;
  }
  if (largeRefreshProcess) {
    if (response) {
      writeJson(response, 202, {
        ...readLargeRefreshStatus(),
        blockingLane: "large",
        statusPath: "/large-refresh-status",
        message: "Large-property search is running. Beach search will be available when it finishes."
      });
    }
    return;
  }
  if (targetedGalleryProcess) {
    if (response) {
      writeJson(response, 202, {
        ...readRefreshStatus(),
        blockingLane: "gallery",
        message: "New-listing photo update is running. Search will be available when it finishes."
      });
    }
    return;
  }
  refreshStoppedByTimeout = false;
  activeSearchArea = scope === "sa" ? null : currentSuburbSearchArea();
  const areaText = activeSearchArea ? formatSearchArea(activeSearchArea) : "";
  const timeoutMs = scope === "sa" ? priorityRefreshTimeoutMs : searchDurationMs(activeSearchArea);
  const timeoutText = formatDuration(timeoutMs);
  const killAfterMs = processTimeoutMs(timeoutMs);

  const nationalPrompt = [
    "You are refreshing the local Property X Factors Australia app.",
    `This run is a systematic suburb sweep. Search only ${areaText}. Do not broaden to other suburbs unless the listing address is clearly in ${areaText}.`,
    `Search direct listing pages for active beachfront, absolute beachfront, oceanfront, Esplanade/front-row, beach-reserve, direct beach access, or no-road beachfront properties for sale in ${areaText} that are missing from the local app.`,
    "Use the same inclusive approach as the Moana apartment example: include strong beachfront apartments, units, townhouses, and villas even when no land/block size is published. Do not reject a listing solely because it is strata/apartment stock or because landSize is unknown; set landSize to null so price per sqm shows as TBA.",
    "Use portal suburb result pages first, especially realestate.com.au/buy/in-{suburb,+state}/list-1 and matching Domain/Homely suburb sale pages, then open each promising result card and save only the exact listing URL. Do not rely only on broad web search snippets. For suburbs within 2 hours of a major city, be exhaustive: check the portal result page, page 2 if present, nearby exact suburb name variants, and Esplanade/beachfront keyword searches before moving on.",
    "Also use targeted queries such as site:realestate.com.au/property, site:domain.com.au, and site:homely.com.au/homes with the suburb/state plus beachfront, absolute beachfront, oceanfront, beach reserve, Esplanade, direct beach access, and no road.",
    "Do not add Tasmania, rentals, sold listings, off-market pages, moved/deleted/unavailable pages, generic suburb searches, duplicate records, duplicate addresses already in app.js, duplicate titles/suburbs on another portal, or pages without a usable direct listing URL and real listing hero image. Image must be a loadable direct hero photo URL, such as i2.au.reastatic.net or a current Homely/Domain image, not realestate.com.au/property-image, realestate.com.au/project-image, placeholder, or stale wrapper URLs.",
    `Work in two phases: spend no more than ${timeoutText} finding and verifying candidates in this suburb, then immediately edit C:\\Users\\User\\Documents\\New project\\app.js with whatever passed verification. Do not keep searching just to fill the batch.`,
    "Before adding, scan app.js for existing ids, listingUrl values, and normalized title + suburb + state address keys. Add up to 10 verified direct listing records that are not already present in sampleProperties. If only 1 to 9 good matches are found, add those immediately. If no good matches are found, make no listing-data changes.",
    `Each added record must include id, title, suburb, state, nearestMajorCity, majorCityMinutes, daysOnMarket if visible or listedDate if available, price, landSize, beachfront, noRoadFrontage, directBeachAccess, factors, status, notes, image, images, and listingUrl. Use ${activeSearchArea ? activeSearchArea.city : "the nearest major city"} as nearestMajorCity unless the listing is clearly closer to another major city. If a realestate.com.au listing hides the price, inspect marketing_price_range in the page data, store the range midpoint as price, add priceLabel with the decoded range, priceSource: "realestate_hidden_range", hiddenPriceCode, and hiddenPriceRange. Open the listing photo gallery when available and set images to every usable direct property photo URL you can verify from the exact listing page, with image as the first/hero image. Do not use logos, agent portraits, floorplans, placeholders, wrapper URLs, or unrelated nearby-listing images in images.`,
    "For each verified listing, also check available 5-year suburb/comparable sales growth evidence. If credible evidence supports potential above 15% annual growth, add investmentStar: true plus investmentAnnualGrowth5Yr or investmentFiveYearGrowth and a short investmentReason. If evidence is missing or weaker, leave investmentStar false or omit it; do not guess.",
    "If any existing listing is sold, under offer, under contract, leased, withdrawn, off market, moved, deleted, unavailable, or no longer active at its exact listing URL, set status so it disappears from the app. Also repair existing active records in the same suburb when their image uses realestate.com.au/property-image, realestate.com.au/project-image, a placeholder, or any broken URL: replace it with a loadable direct hero photo URL from the exact listing, add/update an images array with every usable direct listing photo URL you can verify, or set status unavailable if the exact listing cannot be opened.",
    `Update README counts if the total changes. Run ${nodePath} --check app.js before finishing. Keep the final response short.`
  ].join(" ");

  const saPrompt = [
    "You are refreshing the local Property X Factors Australia app with a South Australia coastal search.",
    "Search specifically for active property listings along the SA coast from Semaphore/Semaphore South/Largs Bay/Taperoo/North Haven/Outer Harbor/West Lakes Shore/Tennyson/Grange/Henley Beach/Henley Beach South through West Beach, Glenelg North, Glenelg, Glenelg South, Somerton Park, Hove, Brighton, Seacliff, Marino, Hallett Cove, O'Sullivan Beach, Christies Beach, Port Noarlunga, Port Noarlunga South, Moana, Maslin Beach, Aldinga, Sellicks, Normanville, Carrickalinga, Second Valley, and Cape Jervis.",
    "Prefer properties within 2 hours of Adelaide, especially beachfront, Esplanade/front-row, direct beach access, beach reserve, oceanfront, and no-road beachfront listings.",
    "Use the same inclusive approach as the Moana apartment example: include strong beachfront apartments, units, townhouses, and villas even when no land/block size is published. Do not reject a listing solely because it is strata/apartment stock or because landSize is unknown; set landSize to null so price per sqm shows as TBA.",
    "Use portal suburb result pages first, especially realestate.com.au/buy/in-{suburb,+sa}/list-1 and matching Domain/Homely suburb sale pages, then open each promising result card and save only the exact listing URL. Check page 2 if present, nearby exact suburb name variants, and Esplanade/beachfront keyword searches before moving on. Also use direct listing pages on realestate.com.au, Domain, and Homely. Do not add rentals, sold listings, off-market pages, moved/deleted/unavailable pages, generic suburb searches, duplicate records, duplicate addresses already in app.js, duplicate titles/suburbs on another portal, or pages without a usable direct listing URL and real listing hero image. Image must be a loadable direct hero photo URL, such as i2.au.reastatic.net or a current Homely/Domain image, not realestate.com.au/property-image, realestate.com.au/project-image, placeholder, or stale wrapper URLs.",
    "Work in two phases: spend no more than 10 minutes finding and verifying candidates, then immediately edit C:\\Users\\User\\Documents\\New project\\app.js with whatever passed verification. Do not keep searching just to fill the batch.",
    "Before adding, scan app.js for existing ids, listingUrl values, and normalized title + suburb + state address keys. Add up to 10 verified direct SA listing records that are not already present in sampleProperties. If only 1 to 9 good matches are found, add those immediately. If no good matches are found, make no listing-data changes.",
    "Each added record must include id, title, suburb, state set to SA, nearestMajorCity set to Adelaide, majorCityMinutes, daysOnMarket if visible or listedDate if available, price, landSize, beachfront, noRoadFrontage, directBeachAccess, factors, status, notes, image, images, and listingUrl. If a realestate.com.au listing hides the price, inspect marketing_price_range in the page data, store the range midpoint as price, add priceLabel with the decoded range, priceSource: \"realestate_hidden_range\", hiddenPriceCode, and hiddenPriceRange. Open the listing photo gallery when available and set images to every usable direct property photo URL you can verify from the exact listing page, with image as the first/hero image. Do not use logos, agent portraits, floorplans, placeholders, wrapper URLs, or unrelated nearby-listing images in images.",
    "For each verified listing, also check available 5-year suburb/comparable sales growth evidence. If credible evidence supports potential above 15% annual growth, add investmentStar: true plus investmentAnnualGrowth5Yr or investmentFiveYearGrowth and a short investmentReason. If evidence is missing or weaker, leave investmentStar false or omit it; do not guess.",
    "If any existing SA listing is sold, under offer, under contract, leased, withdrawn, off market, moved, deleted, unavailable, or no longer active at its exact listing URL, set status so it disappears from the app. Also repair existing active SA records when their image uses realestate.com.au/property-image, realestate.com.au/project-image, a placeholder, or any broken URL: replace it with a loadable direct hero photo URL from the exact listing, add/update an images array with every usable direct listing photo URL you can verify, or set status unavailable if the exact listing cannot be opened.",
    `Update README counts if the total changes. Run ${nodePath} --check app.js before finishing. Keep the final response short.`
  ].join(" ");

  const prompt = scope === "sa" ? saPrompt : nationalPrompt;

  const label = mode === "auto" ? "Automatic suburb sweep" : scope === "sa" ? "SA" : "Manual suburb sweep";
  lastAutoRefreshAt = mode === "auto" ? Date.now() : lastAutoRefreshAt;
  const propertyIdsBeforeRefresh = readPropertyIds();
  writeRefreshStatus(withSearchAreaStatus({
    state: "running",
    mode,
    message: scope === "sa" ? "Searching SA coast near Adelaide..." : `Searching ${areaText} for up to ${timeoutText}, then saving changes...`
  }));
  fs.appendFileSync(logPath, `\n\n[${new Date().toISOString()}] ${label} refresh started${areaText ? ` for ${areaText}` : ""}\n`);

  refreshProcess = spawn(codexPath, [
    "--search",
    "exec",
    "--skip-git-repo-check",
    "-C",
    root,
    prompt
  ], {
    cwd: root,
    windowsHide: true,
    stdio: ["ignore", "pipe", "pipe"]
  });

  refreshProcess.stdout.on("data", chunk => {
    fs.appendFileSync(logPath, chunk);
    writeRefreshStatus(withSearchAreaStatus({ state: "running", mode, message: inferProgressMessage() }));
  });
  refreshProcess.stderr.on("data", chunk => {
    fs.appendFileSync(logPath, chunk);
    writeRefreshStatus(withSearchAreaStatus({ state: "running", mode, message: inferProgressMessage() }));
  });
  refreshProcess.on("error", error => {
    fs.appendFileSync(logPath, `\n[${new Date().toISOString()}] ${label} refresh failed to start: ${error.message}\n`);
    scheduleNextAutoRefresh();
    writeRefreshStatus(withSearchAreaStatus({ state: "error", mode, message: `Search could not start: ${error.message}` }));
    refreshProcess = null;
    activeSearchArea = null;
    if (refreshTimeout) clearTimeout(refreshTimeout);
    refreshTimeout = null;
  });
  refreshProcess.on("exit", code => {
    fs.appendFileSync(logPath, `\n[${new Date().toISOString()}] ${label} refresh finished with code ${code}\n`);
    if (activeSearchArea && (code === 0 || refreshStoppedByTimeout)) advanceSuburbSearchArea();
    scheduleNextAutoRefresh();
    const completedByTimeout = refreshStoppedByTimeout;
    writeRefreshStatus(withSearchAreaStatus({
      state: code === 0 || completedByTimeout ? "complete" : "error",
      mode,
      message: code === 0 || completedByTimeout ? `Finished ${areaText}. Reloading listings...` : "Search hit an error. Check refresh-listings.log."
    }));
    queueNewListingGalleryRefresh(propertyIdsBeforeRefresh, label, logPath);
    refreshProcess = null;
    refreshStoppedByTimeout = false;
    activeSearchArea = null;
    if (refreshTimeout) clearTimeout(refreshTimeout);
    refreshTimeout = null;
  });

  refreshTimeout = setTimeout(() => {
    if (!refreshProcess) return;
    fs.appendFileSync(logPath, `\n[${new Date().toISOString()}] ${label} refresh timed out after save window\n`);
    scheduleNextAutoRefresh();
    writeRefreshStatus(withSearchAreaStatus({ state: "complete", mode, message: `${timeoutText} ${areaText || "search"} search plus save window finished. Reloading listings...` }));
    refreshStoppedByTimeout = true;
    refreshProcess.kill();
    refreshTimeout = null;
  }, killAfterMs);

  if (response) writeJson(response, 202, readRefreshStatus());
}

function startLargeListingRefresh(response, mode = "manual") {
  if (largeRefreshProcess) {
    if (response) writeJson(response, 202, readLargeRefreshStatus());
    return;
  }
  if (refreshProcess) {
    if (response) {
      writeJson(response, 202, {
        ...readRefreshStatus(),
        blockingLane: "beach",
        statusPath: "/refresh-status",
        message: "Beach search is running. Large-property search will be available when it finishes."
      });
    }
    return;
  }
  if (targetedGalleryProcess) {
    if (response) {
      writeJson(response, 202, {
        ...readLargeRefreshStatus(),
        blockingLane: "gallery",
        message: "New-listing photo update is running. Large-property search will be available when it finishes."
      });
    }
    return;
  }

  largeRefreshStoppedByTimeout = false;
  activeLargeSearchArea = currentLargeSearchArea();
  const areaText = formatLargeSearchArea(activeLargeSearchArea);
  const timeoutMs = searchDurationMs(activeLargeSearchArea);
  const timeoutText = formatDuration(timeoutMs);
  const killAfterMs = processTimeoutMs(timeoutMs);
  const prompt = [
    "You are refreshing the local Property X Factors Australia app in Large Properties mode.",
    `This is a separate large-land search lane. Search only ${areaText}. Do not broaden outside this region unless the listing clearly belongs to the same market area.`,
    "Find active Australian property listings for large blocks of land, farms, lifestyle acreage, rural land, development land, grazing land, mixed-use rural holdings, or large coastal/rural holdings.",
    "Target land size between 20 hectares and 200,000 hectares inclusive. Do not require beachfront. Prefer properties with good capital-growth potential, access to major cities/regional centres, subdivision or tourism upside, water access, coastal proximity, income potential, or rezoning/development signals.",
    "Use portal result pages and direct listings on realestate.com.au, Domain, and Homely. Search terms should include acreage, rural, farm, lifestyle, land, development site, grazing, 20ha, 50ha, 100ha, 500 acres, and the region/state.",
    "Do not add rentals, sold listings, off-market pages, moved/deleted/unavailable pages, generic search pages, duplicate records, duplicate addresses already in app.js, duplicate titles/regions on another portal, or pages without a usable direct listing URL and real listing hero image. Image must be a loadable direct hero photo URL, such as i2.au.reastatic.net or a current Homely/Domain image, not realestate.com.au/property-image, realestate.com.au/project-image, placeholder, or stale wrapper URLs.",
    `Work in two phases: spend no more than ${timeoutText} finding and verifying candidates, then immediately edit C:\\Users\\User\\Documents\\New project\\app.js with whatever passed verification. Do not keep searching just to fill the batch.`,
    "Before adding, scan app.js for existing ids, listingUrl values, and normalized title + suburb + state address keys. Add up to 10 verified large-property records that are not already present in sampleProperties. If only 1 to 9 good matches are found, add those immediately. If no good matches are found, make no listing-data changes.",
    `Each added record must include id, title, suburb or region as suburb, state, nearestMajorCity set to ${activeLargeSearchArea.city}, majorCityMinutes if reasonably estimable, daysOnMarket if visible or listedDate if available, price, landSize in square metres, beachfront false unless clearly beachfront, noRoadFrontage false unless clearly no-road waterfront, directBeachAccess false unless clearly true, factors, status, notes, image, images, listingUrl, and listingCategory: "large". If a realestate.com.au listing hides the price, inspect marketing_price_range in the page data, store the range midpoint as price, add priceLabel with the decoded range, priceSource: "realestate_hidden_range", hiddenPriceCode, and hiddenPriceRange. Open the listing photo gallery when available and set images to every usable direct property photo URL you can verify from the exact listing page, with image as the first/hero image. Do not use logos, agent portraits, floorplans, placeholders, wrapper URLs, or unrelated nearby-listing images in images.`,
    "For each verified listing, also check available 5-year regional/comparable sales growth evidence. If credible evidence supports potential above 15% annual growth, add investmentStar: true plus investmentAnnualGrowth5Yr or investmentFiveYearGrowth and a short investmentReason. If evidence is missing or weaker, leave investmentStar false or omit it; do not guess.",
    "If any existing large-property listing is sold, under offer, under contract, leased, withdrawn, off market, moved, deleted, unavailable, or no longer active at its exact listing URL, set status so it disappears from the app. Also repair existing active large-property records in the same region when their image uses realestate.com.au/property-image, realestate.com.au/project-image, a placeholder, or any broken URL: replace it with a loadable direct hero photo URL from the exact listing, add/update an images array with every usable direct listing photo URL you can verify, or set status unavailable if the exact listing cannot be opened.",
    `Update README counts if the total changes. Run ${nodePath} --check app.js before finishing. Keep the final response short.`
  ].join(" ");

  const label = mode === "auto" ? "Automatic large-property sweep" : "Manual large-property sweep";
  lastLargeAutoRefreshAt = mode === "auto" ? Date.now() : lastLargeAutoRefreshAt;
  const propertyIdsBeforeRefresh = readPropertyIds();
  writeLargeRefreshStatus(withLargeSearchAreaStatus({
    state: "running",
    mode,
    message: `Searching ${areaText} for large blocks up to ${timeoutText}, then saving changes...`
  }));
  fs.appendFileSync(largeLogPath, `\n\n[${new Date().toISOString()}] ${label} started for ${areaText}\n`);

  largeRefreshProcess = spawn(codexPath, [
    "--search",
    "exec",
    "--skip-git-repo-check",
    "-C",
    root,
    prompt
  ], {
    cwd: root,
    windowsHide: true,
    stdio: ["ignore", "pipe", "pipe"]
  });

  largeRefreshProcess.stdout.on("data", chunk => {
    fs.appendFileSync(largeLogPath, chunk);
    writeLargeRefreshStatus(withLargeSearchAreaStatus({ state: "running", mode, message: inferLargeProgressMessage() }));
  });
  largeRefreshProcess.stderr.on("data", chunk => {
    fs.appendFileSync(largeLogPath, chunk);
    writeLargeRefreshStatus(withLargeSearchAreaStatus({ state: "running", mode, message: inferLargeProgressMessage() }));
  });
  largeRefreshProcess.on("error", error => {
    fs.appendFileSync(largeLogPath, `\n[${new Date().toISOString()}] ${label} failed to start: ${error.message}\n`);
    scheduleNextLargeAutoRefresh();
    writeLargeRefreshStatus(withLargeSearchAreaStatus({ state: "error", mode, message: `Large search could not start: ${error.message}` }));
    largeRefreshProcess = null;
    activeLargeSearchArea = null;
    if (largeRefreshTimeout) clearTimeout(largeRefreshTimeout);
    largeRefreshTimeout = null;
  });
  largeRefreshProcess.on("exit", code => {
    fs.appendFileSync(largeLogPath, `\n[${new Date().toISOString()}] ${label} finished with code ${code}\n`);
    if (activeLargeSearchArea && (code === 0 || largeRefreshStoppedByTimeout)) advanceLargeSearchArea();
    scheduleNextLargeAutoRefresh();
    const completedByTimeout = largeRefreshStoppedByTimeout;
    writeLargeRefreshStatus(withLargeSearchAreaStatus({
      state: code === 0 || completedByTimeout ? "complete" : "error",
      mode,
      message: code === 0 || completedByTimeout ? `Finished ${areaText}. Reloading large listings...` : "Large search hit an error. Check large-refresh-listings.log."
    }));
    queueNewListingGalleryRefresh(propertyIdsBeforeRefresh, label, largeLogPath);
    largeRefreshProcess = null;
    largeRefreshStoppedByTimeout = false;
    activeLargeSearchArea = null;
    if (largeRefreshTimeout) clearTimeout(largeRefreshTimeout);
    largeRefreshTimeout = null;
  });

  largeRefreshTimeout = setTimeout(() => {
    if (!largeRefreshProcess) return;
    fs.appendFileSync(largeLogPath, `\n[${new Date().toISOString()}] ${label} timed out after save window\n`);
    scheduleNextLargeAutoRefresh();
    writeLargeRefreshStatus(withLargeSearchAreaStatus({ state: "complete", mode, message: `${timeoutText} ${areaText} large search plus save window finished. Reloading listings...` }));
    largeRefreshStoppedByTimeout = true;
    largeRefreshProcess.kill();
    largeRefreshTimeout = null;
  }, killAfterMs);

  if (response) writeJson(response, 202, readLargeRefreshStatus());
}

function scheduleNextAutoRefresh(delay = autoRefreshIntervalMs) {
  nextAutoRefreshAt = new Date(Date.now() + delay).toISOString();
  return nextAutoRefreshAt;
}

function scheduleNextLargeAutoRefresh(delay = autoRefreshIntervalMs) {
  nextLargeAutoRefreshAt = new Date(Date.now() + delay).toISOString();
  return nextLargeAutoRefreshAt;
}

function startAutoRefreshLoop() {
  scheduleNextAutoRefresh(60 * 1000);
  autoRefreshTimer = setInterval(() => {
    if (refreshProcess || largeRefreshProcess || targetedGalleryProcess) return;
    if (Date.now() - lastAutoRefreshAt < autoRefreshIntervalMs - 1000) return;
    startListingRefresh(null, "national", "auto");
  }, 60 * 1000);
}

function startLargeAutoRefreshLoop() {
  scheduleNextLargeAutoRefresh(90 * 1000);
  largeAutoRefreshTimer = setInterval(() => {
    if (refreshProcess || largeRefreshProcess || targetedGalleryProcess) return;
    if (Date.now() - lastLargeAutoRefreshAt < autoRefreshIntervalMs - 1000) return;
    startLargeListingRefresh(null, "auto");
  }, 60 * 1000);
}

http.createServer((request, response) => {
  const urlPath = decodeURIComponent(request.url.split("?")[0]);

  if (urlPath === "/refresh-listings" && request.method === "POST") {
    startListingRefresh(response, "national");
    return;
  }

  if (urlPath === "/refresh-listings-sa" && request.method === "POST") {
    startListingRefresh(response, "sa");
    return;
  }

  if (urlPath === "/refresh-large-listings" && request.method === "POST") {
    startLargeListingRefresh(response, "manual");
    return;
  }

  if (urlPath === "/refresh-favourite-images" && request.method === "POST") {
    readRequestJson(request).then(async body => {
      const ids = Array.isArray(body.ids) ? body.ids.map(String).filter(Boolean).slice(0, 100) : [];
      if (!ids.length) {
        writeJson(response, 400, { message: "No favourite property ids were supplied." });
        return;
      }
      try {
        const result = await refreshFavouriteImages(ids);
        writeJson(response, 200, result);
      } catch (error) {
        writeJson(response, 500, { message: error.message || "Favourite photo update failed." });
      }
    });
    return;
  }

  if (urlPath === "/refresh-status") {
    const status = readRefreshStatus();
    if (status.state === "running" && !refreshProcess) {
      status.state = "idle";
      status.mode = "auto";
      status.message = "Waiting for next automatic search.";
      writeRefreshStatus(status);
    } else if (status.state === "running") {
      status.message = inferProgressMessage();
    }
    status.nextAutoRefreshAt = nextAutoRefreshAt;
    writeJson(response, 200, withSearchAreaStatus(status));
    return;
  }

  if (urlPath === "/large-refresh-status") {
    const status = readLargeRefreshStatus();
    if (status.state === "running" && !largeRefreshProcess) {
      status.state = "idle";
      status.mode = "auto";
      status.message = "Waiting for next automatic large-property search.";
      writeLargeRefreshStatus(status);
    } else if (status.state === "running") {
      status.message = inferLargeProgressMessage();
    }
    status.nextAutoRefreshAt = nextLargeAutoRefreshAt;
    writeJson(response, 200, withLargeSearchAreaStatus(status));
    return;
  }

  if (urlPath === "/listing-image") {
    const requestUrl = new URL(request.url, `http://127.0.0.1:${port}`);
    const listingUrl = requestUrl.searchParams.get("url") || "";
    if (!isSupportedListingHost(listingUrl)) {
      writeJson(response, 400, { image: "" });
      return;
    }
    resolveListingImage(listingUrl).then(image => {
      writeJson(response, image ? 200 : 404, { image });
    });
    return;
  }

  if (urlPath === "/listing-images") {
    const requestUrl = new URL(request.url, `http://127.0.0.1:${port}`);
    const listingUrl = requestUrl.searchParams.get("url") || "";
    if (!isSupportedListingHost(listingUrl)) {
      writeJson(response, 400, { images: [] });
      return;
    }
    resolveListingImages(listingUrl).then(images => {
      writeJson(response, images.length ? 200 : 404, { images });
    });
    return;
  }

  const requested = path.normalize(path.join(root, urlPath === "/" ? "index.html" : urlPath));

  if (!requested.startsWith(root)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  fs.readFile(requested, (error, data) => {
    if (error) {
      response.writeHead(404);
      response.end("Not found");
      return;
    }

    response.writeHead(200, { "Content-Type": types[path.extname(requested)] || "application/octet-stream" });
    response.end(data);
  });
}).listen(port, "127.0.0.1", () => {
  console.log(`Property X Factors preview: http://127.0.0.1:${port}`);
  if (!autoRefreshTimer) startAutoRefreshLoop();
  if (!largeAutoRefreshTimer) startLargeAutoRefreshLoop();
});
