import { readFile, readdir, writeFile, mkdir } from 'node:fs/promises';
import { parse } from 'yaml';
import { zipSync, strToU8 } from 'fflate';

const root = new URL('../', import.meta.url);
const contentDir = new URL('src/content/guides/', root);
const downloadDir = new URL('public/downloads/', root);
await mkdir(downloadDir, { recursive: true });
const guides = await Promise.all((await readdir(contentDir)).filter(name => name.endsWith('.md')).map(async name => {
  const source = await readFile(new URL(name, contentDir), 'utf8');
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) throw new Error(`Missing Markdown frontmatter: ${name}`);
  return { ...parse(match[1]), body: match[2] };
}));
guides.sort((a, b) => a.order - b.order);
const repo = 'https://github.com/SeanixReal/icpep-starter';
const intro = `# CpE Starter Toolkit\n\nVersion 0.1.0 | October 29, 2026 | ICpEP.SE CIT-U Chapter\n\nV1 REVIEW DRAFT. All software recommendations are proposed. Faculty confirmation and Windows pilot testing are pending. Follow your instructor's requirements when they differ.\n\n## Readiness checklist\n\n- [ ] Identify your device architecture and operating system.\n- [ ] Confirm permission and administrator access where required.\n- [ ] Check official storage, software, and internet requirements.\n- [ ] Back up important coursework.\n- [ ] Create a practice folder and enable filename extensions.\n\nCheckmarks are personal reminders, not proof of setup success.\n`;
const sections = guides.map(guide => {
  // Repository URLs remain usable when this file is read offline and later reconnected.
  const body = guide.body.replace(/\]\(\/(guides\/[^)]+|downloads\/|troubleshooting\/(?:#[^)]+)?)\)/g, (_, path) => {
    if (path.startsWith('guides/')) return `](${repo}/blob/main/src/content/${path.replace(/\/$/, '')}.md)`;
    if (path.startsWith('downloads/')) return `](${repo}/tree/main/public/downloads)`;
    return `](${repo}/blob/main/src/pages/troubleshooting.astro)`;
  }).replace(/^(#{1,5}) /gm, '#$1 ');
  return `\n## ${guide.order}. ${guide.title}\n\n${guide.description}\n\n${body}\n### Official references\n\n${guide.sources.map(source => `- [${source.title}](${source.url})`).join('\n')}\n`;
});
await writeFile(new URL('starter-guide.md', downloadDir), intro + sections.join('\n') + `\n## Feedback and maintenance\n\nEditable source and contribution instructions: ${repo}\n\nNever include student records, private credentials, or personal information in public issues.\n`, 'utf8');

const files = {};
for (const name of ['hello.c', 'hello.cpp', 'hello.py', 'README.txt']) {
  files[name] = [strToU8(await readFile(new URL(name, downloadDir), 'utf8')), { mtime: new Date('2026-10-29T00:00:00Z') }];
}
await writeFile(new URL('verification-programs.zip', downloadDir), zipSync(files));
console.log(`Prepared ${guides.length} guides and 3 verification source files for download.`);
