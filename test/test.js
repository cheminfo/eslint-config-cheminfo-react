import assert from 'node:assert';

import { loadESLint } from 'eslint';

import {
  excludeJsdoc,
  getRuleId,
  getRuleMessageIds,
  isError,
  isWarning,
} from './rule_helpers.js';

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

const warnings = notOkResult.messages.filter(isWarning).filter(excludeJsdoc);

const warningRules = warnings.map(getRuleId).sort();
assert.deepStrictEqual(warningRules, [
  'react-you-might-not-need-an-effect/you-might-not-need-an-effect',
]);

const effectMessageIds = getRuleMessageIds(
  warnings,
  'react-you-might-not-need-an-effect/you-might-not-need-an-effect',
);

assert.deepStrictEqual(effectMessageIds, ['avoidInternalEffect']);
