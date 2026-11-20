// gta6-clipper-01 entry program (Node 22, standard library only).
//
// The entry is a YouTube video: a vertical GTA 6 launch clip cut from
// Rockstar's official GTA VI artwork, with the make.fun pitch burned into
// its final seconds. This program has exactly one job — hand the house the
// video's address. It copies VIDEO.json from the repository root into the
// output directory, where the gate reads it. The house then reads the
// video's view count from YouTube itself; nothing this program writes
// about the video is scored.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const repoDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });

try {
  copyFileSync(join(repoDir, 'VIDEO.json'), join(outDir, 'VIDEO.json'));
} catch (error) {
  // Fail loudly: without VIDEO.json there is no video for the house to read.
  console.error(`Could not deliver VIDEO.json from ${repoDir}: ${(error as Error).message}`);
  process.exit(1);
}

console.log(`VIDEO.json delivered: ${join(repoDir, 'VIDEO.json')} -> ${join(outDir, 'VIDEO.json')}`);
