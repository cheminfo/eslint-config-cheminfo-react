import assert from 'node:assert';

import { loadESLint } from 'eslint';

const ESLint = await loadESLint({ useFlatConfig: true });
/** @type {import('eslint').ESLint} */
const eslint = new ESLint();

const [okResult, notOkResult] = await eslint.lintFiles([
  'test/ok.jsx',
  'test/not_ok.jsx',
]);

assert.strictEqual(okResult.errorCount, 0, 'ok.jsx should have no error');

const errors = notOkResult.messages.filter(isError).map(getRuleId).sort();

assert.deepStrictEqual(errors, [
  'no-unused-vars',
  'react-hooks/exhaustive-deps',
]);

const warnings = notOkResult.messages
  .filter(isWarning)
  .filter(excludeJsdoc)
  .map(getRuleId)
  .sort();
assert.deepStrictEqual(warnings, []);

function isError(message) {
  return message.severity === 2;
}

function isWarning(message) {
  return message.severity === 1;
}

function excludeJsdoc(message) {
  return !message.ruleId.startsWith('jsdoc/');
}

function getRuleId(message) {
  return message.ruleId;
}
