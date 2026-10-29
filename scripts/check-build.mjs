import { readdir, readFile, stat } from 'node:fs/promises';
import { resolve, join } from 'node:path';

const root = resolve('dist');
const base = (process.env.SITE_BASE || '/').replace(/\/$/, '');
const files = [];
async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) await walk(path); else if (path.endsWith('.html')) files.push(path);
  }
}
await walk(root);
const errors = [];
let links = 0;
for (const file of files) {
  const html = await readFile(file, 'utf8');
  if (!/<html[^>]*lang="en"/.test(html) || !/<h1[\s>]/.test(html)) errors.push(`${file}: missing language or main heading`);
  for (const match of html.matchAll(/\s(?:href|src)="([^"]+)"/g)) {
    const value = match[1].replaceAll('&amp;', '&');
    if (/^(?:https?:|mailto:|data:|tel:|\/\/)/.test(value)) continue;
    if (!value.startsWith('/') && !value.startsWith('#')) continue;
    links++;
    let target;
    const [rawPath, rawHash] = value.split('#');
    if (!rawPath) target = file;
    else {
      if (base && rawPath !== base && !rawPath.startsWith(`${base}/`)) { errors.push(`${file}: link escapes configured base: ${value}`); continue; }
      const path = decodeURIComponent(rawPath.slice(base.length).split('?')[0]);
      target = resolve(root, `.${path}`);
      if (!target.startsWith(root)) { errors.push(`${file}: invalid local path: ${value}`); continue; }
      try { if ((await stat(target)).isDirectory()) target = join(target, 'index.html'); }
      catch { errors.push(`${file}: missing link or asset: ${value}`); continue; }
    }
    try {
      const info = await stat(target);
      if (!info.isFile()) throw new Error('Not a file');
      if (rawHash && target.endsWith('.html')) {
        const targetHtml = target === file ? html : await readFile(target, 'utf8');
        if (!targetHtml.includes(`id="${decodeURIComponent(rawHash)}"`)) errors.push(`${file}: missing anchor: ${value}`);
      }
    } catch { errors.push(`${file}: missing link or asset: ${value}`); }
  }
  if (/THESIS:|OWN-WORLD:|seed:014e|Direction contract/.test(html)) errors.push(`${file}: development-only design metadata leaked`);
}
const search = JSON.parse(await readFile(join(root, 'search.json'), 'utf8'));
if (search.length < 11) errors.push('Search index is incomplete');
if (errors.length) { console.error(errors.join('\n')); process.exitCode = 1; }
else console.log(`Checked ${files.length} pages, ${links} local links/assets, and ${search.length} search entries (base: ${base || '/'}).`);
