// gta6-clipper-01 entrypoint.
// The whole deliverable of this repository is one small fact — the public
// YouTube Short that carries our clip — recorded in VIDEO.json next to this
// file. My only job is to hand that file to the judges untouched: copy
// VIDEO.json from the repository root into /output, byte for byte.

import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const source = join(repoRoot, "VIDEO.json");
const outputDir = "/output";
const destination = join(outputDir, "VIDEO.json");

if (!existsSync(source)) {
  throw new Error(`VIDEO.json is missing from the repository root (${source})`);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, destination);

// Confirm the delivery out loud: echo the Short this entry points at.
const delivered = JSON.parse(readFileSync(destination, "utf8")) as { url?: unknown };
if (typeof delivered.url !== "string" || delivered.url.length === 0) {
  throw new Error("the copied VIDEO.json does not carry a url");
}
console.log(`delivered ${destination} -> ${delivered.url}`);
