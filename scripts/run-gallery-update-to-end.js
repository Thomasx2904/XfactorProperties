const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const nodePath = process.execPath;
const updaterPath = path.join(__dirname, "update-property-galleries.js");
const logPath = path.join(root, "gallery-update-run.log");
const batchSize = process.env.BATCH_SIZE || "25";

function append(message) {
  fs.appendFileSync(logPath, message);
}

function runBatch(batch) {
  append(`\n[${new Date().toISOString()}] Batch ${batch} started\n`);
  return new Promise(resolve => {
    const child = spawn(nodePath, [updaterPath], {
      cwd: root,
      env: { ...process.env, BATCH_SIZE: batchSize },
      windowsHide: true
    });

    let stdout = "";
    child.stdout.on("data", chunk => {
      const text = chunk.toString();
      stdout += text;
      append(text);
    });
    child.stderr.on("data", chunk => append(chunk.toString()));
    child.on("exit", code => resolve({ code, stdout }));
    child.on("error", error => {
      append(`[${new Date().toISOString()}] Batch ${batch} could not start: ${error.message}\n`);
      resolve({ code: 1, stdout });
    });
  });
}

async function main() {
  append(`\n[${new Date().toISOString()}] Gallery update runner started with batch size ${batchSize}\n`);
  let batch = 0;
  while (true) {
    batch += 1;
    const result = await runBatch(batch);
    if (result.code !== 0) {
      append(`[${new Date().toISOString()}] Runner stopped: updater exited with code ${result.code}\n`);
      process.exit(result.code || 1);
    }
    if (/No gallery candidates found\./.test(result.stdout || "")) {
      append(`[${new Date().toISOString()}] Gallery update runner completed all candidates\n`);
      break;
    }
  }
}

main().catch(error => {
  append(`[${new Date().toISOString()}] Runner crashed: ${error.message}\n`);
  process.exit(1);
});
