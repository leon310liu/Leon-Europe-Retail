#!/usr/bin/env node
import { spawnSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, resolve, relative } from 'node:path';
import { existsSync, mkdirSync } from 'node:fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
function arg(name, fallback) {
  const index = args.indexOf(name);
  return index >= 0 && args[index + 1] ? args[index + 1] : fallback;
}
const dataPath = resolve(__dirname, arg('--data', 'cover-data.json'));
const outPath = resolve(__dirname, arg('--out', 'exports/cover.png'));
const chrome = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
if (!existsSync(dataPath)) throw new Error(`Data file not found: ${dataPath}`);
if (!existsSync(chrome)) throw new Error('Google Chrome not found at /Applications/Google Chrome.app');
mkdirSync(dirname(outPath), { recursive: true });
const dataRel = relative(__dirname, dataPath).split('\\').join('/');
const url = `${pathToFileURL(resolve(__dirname, 'template.html')).href}?data=${encodeURIComponent(dataRel)}`;
const result = spawnSync(chrome, [
  '--headless=new',
  '--disable-gpu',
  '--hide-scrollbars',
  '--allow-file-access-from-files',
  '--window-size=1080,1920',
  '--force-device-scale-factor=1',
  '--virtual-time-budget=2500',
  `--screenshot=${outPath}`,
  url
], { stdio: 'inherit' });
if (result.status !== 0) process.exit(result.status ?? 1);
console.log(`exported: ${outPath}`);
