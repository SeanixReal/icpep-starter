import test from 'node:test';
import assert from 'node:assert/strict';
import { GUIDE_IDS, parseProgress, nextGuide } from '../src/lib/progress.mjs';

test('corrupted, unexpected, and hostile local-storage values cannot count as progress', () => {
  for (const value of [null, '', 'broken', '{}', 'null', 'true', '42', '"readiness"']) assert.deepEqual(parseProgress(value), []);
  assert.deepEqual(parseProgress('["readiness","readiness","unknown",null,{},"verify"]'), ['readiness', 'verify']);
});
test('resuming setup chooses the earliest unfinished prerequisite', () => {
  assert.equal(nextGuide([]), 'readiness');
  assert.equal(nextGuide(['readiness', 'c-cpp']), 'editor');
  assert.equal(nextGuide(GUIDE_IDS), null);
});
