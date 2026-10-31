import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { unzipSync, strFromU8 } from 'fflate';
import { parse } from 'yaml';
import { markdownBase } from '../scripts/markdown-base.mjs';
import { searchGuides } from '../src/lib/search.mjs';

test('the generated archive contains exactly the advertised source files, unchanged', async () => {
  const archive = unzipSync(await readFile('public/downloads/verification-programs.zip'));
  assert.deepEqual(Object.keys(archive).sort(), ['README.txt', 'hello.c', 'hello.cpp', 'hello.py']);
  for (const [name, bytes] of Object.entries(archive)) assert.equal(strFromU8(bytes), await readFile(`public/downloads/${name}`, 'utf8'));
});
test('verification instructions and downloadable programs cannot silently diverge', async () => {
  const guide = await readFile('src/content/guides/verify.md', 'utf8');
  for (const name of ['hello.c', 'hello.cpp', 'hello.py']) {
    assert.ok(guide.includes((await readFile(`public/downloads/${name}`, 'utf8')).trim()), `Guide must contain the exact ${name} source`);
  }
});
test('the six proposed setup guides keep unique order and official source links', async () => {
  const allowed = ['microsoft.com', 'visualstudio.com', 'msys2.org', 'python.org', 'git-scm.com', 'github.com', 'gcc.gnu.org', 'apple.com'];
  const guides = await Promise.all((await readdir('src/content/guides')).map(async name => {
    const source = await readFile(`src/content/guides/${name}`, 'utf8');
    return parse(source.split(/^---\s*$/m)[1]);
  }));
  assert.deepEqual(guides.filter(g => g.category === 'setup').map(g => g.order).sort(), [1, 2, 3, 4, 5, 6]);
  for (const guide of guides) {
    assert.equal(guide.status, 'proposed');
    assert.ok(guide.sources.length > 0);
    for (const source of guide.sources) {
      const url = new URL(source.url);
      assert.equal(url.protocol, 'https:');
      assert.ok(allowed.some(domain => url.hostname === domain || url.hostname.endsWith(`.${domain}`)), `Nonofficial source: ${url}`);
    }
  }
});
test('Markdown navigation survives project subpaths without rewriting external URLs or fragments', () => {
  const tree = { children: ['/guides/python/', '#check', 'https://python.org/', '//example.com/a'].map(href => ({ properties: { href } })) };
  markdownBase({ base: '/icpep-starter/' })(tree);
  assert.deepEqual(tree.children.map(node => node.properties.href), ['/icpep-starter/guides/python/', '#check', 'https://python.org/', '//example.com/a']);
});
test('search finds command-level content, ranks titles first, and handles an empty query', () => {
  const entries = [
    { title: 'Readiness', description: 'Prepare a folder', body: 'Python comes later.' },
    { title: 'Python', description: 'Install a runtime', body: 'Use py install 3.14' },
  ];
  assert.deepEqual(searchGuides(entries, ''), []);
  assert.equal(searchGuides(entries, 'PYTHON')[0].title, 'Python');
  assert.equal(searchGuides(entries, 'py install')[0].title, 'Python');
  assert.deepEqual(searchGuides(entries, 'Python nonexistent'), []);
});
