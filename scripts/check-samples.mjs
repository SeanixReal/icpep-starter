import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import assert from 'node:assert/strict';

const source = fileURLToPath(new URL('../public/downloads/', import.meta.url));
const temp = await mkdtemp(join(tmpdir(), 'cpe-sample-check-'));
const run = (command, args) => execFileSync(command, args, { encoding: 'utf8', timeout: 30_000 });
const normalize = (output) => output.replaceAll('\r\n', '\n').trim();
try {
  for (const [compiler, filename, language] of [['gcc', 'hello.c', 'C'], ['g++', 'hello.cpp', 'C++']]) {
    const target = join(temp, filename === 'hello.c' ? 'hello-c.exe' : 'hello-cpp.exe');
    run(compiler, ['-Wall', '-Wextra', '-Werror', join(source, filename), '-o', target]);
    assert.equal(normalize(run(target, [])), `Hello, CpE!\n${language} setup works.`);
    console.log(`${filename}: compiled without warnings; output matches.`);
  }
  const python = process.env.PYTHON_BIN || (process.platform === 'win32' ? 'python' : 'python3');
  assert.equal(normalize(run(python, [join(source, 'hello.py')])), 'Hello, CpE!\nPython setup works.');
  console.log('hello.py: output matches. This tests programs, not a clean student installation.');
} finally {
  // Verify the absolute cleanup target is our own temporary folder before recursive removal.
  if (resolve(dirname(temp)) !== resolve(tmpdir()) || !basename(temp).startsWith('cpe-sample-check-')) throw new Error('Unexpected sample-test cleanup path');
  await rm(temp, { recursive: true, force: true });
}
