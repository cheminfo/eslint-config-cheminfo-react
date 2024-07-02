import assert from 'node:assert';
import fs from 'node:fs';
import util from 'node:util';

import { Linter } from 'eslint';

import config from '../index.js';

const linter = new Linter({ configType: 'flat' });

function readTestFile(filename) {
  return fs.readFileSync(new URL(`./${filename}`, import.meta.url), 'utf8');
}

function verifyTestFile(filename) {
  return linter.verify(readTestFile(filename), config, {
    filename: `test/${filename}`,
  });
}

const okResult = verifyTestFile('ok.jsx');
assert.strictEqual(
  okResult.length,
  0,
  `ok.jsx should have no error: ${util.inspect(okResult)}`,
);
