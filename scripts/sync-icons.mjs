import { readFileSync, copyFileSync, existsSync, mkdirSync, readdirSync } from 'fs';
import { resolve, join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const contentDir = join(root, 'src/content');
const iconsOut = join(root, 'public/icons');
const iconsSource = join(root, 'node_modules/simple-icons/icons');

mkdirSync(iconsOut, { recursive: true });

function collectIcons(dir) {
  const icons = new Set();
  for (const file of readdirSync(dir, { recursive: true })) {
    if (!file.endsWith('.json')) continue;
    const data = JSON.parse(readFileSync(join(dir, file), 'utf8'));
    for (const item of data.tech ?? []) if (item.icon) icons.add(item.icon);
    for (const item of data.links ?? []) if (item.icon) icons.add(item.icon);
    for (const item of data.socials ?? []) if (item.icon) icons.add(item.icon);
  }
  return icons;
}

const icons = collectIcons(contentDir);
let copied = 0;
let missing = [];

for (const icon of icons) {
  const src = join(iconsSource, `${icon}.svg`);
  const dest = join(iconsOut, `${icon}.svg`);
  if (existsSync(dest)) continue;
  if (!existsSync(src)) { missing.push(icon); continue; }
  copyFileSync(src, dest);
  console.log(`copied: ${icon}.svg`);
  copied++;
}

if (copied === 0 && missing.length === 0) console.log('all icons already in sync');
if (missing.length) console.warn(`not found in simple-icons: ${missing.join(', ')}`);
