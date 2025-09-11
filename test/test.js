import assert from 'node:assert';
import test from 'node:test';

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

test('ok', async () => {
  const [result] = await eslint.lintFiles('test/ok.jsx');
  assert.strictEqual(result.errorCount, 0, 'ok.jsx should have no error');
  assert.strictEqual(
    result.messages.filter(excludeJsdoc).length,
    0,
    'ok.jsx should have no warning',
  );
});

test('not ok', async () => {
  const [result] = await eslint.lintFiles('test/not_ok.jsx');

  assert.deepStrictEqual(
    result.messages.filter(isError).map(getRuleId).toSorted(),
    [
      // React is defined but never used
      'no-unused-vars',
      'react-hooks/exhaustive-deps',
      'react-hooks/react-compiler',
      'react/jsx-no-target-blank',
    ],
  );

  assert.strictEqual(
    result.messages.filter(isWarning).filter(excludeJsdoc).length,
    0,
    'not_ok.jsx should not have warnings',
  );
});

test('you might not need an effect', async () => {
  const [result] = await eslint.lintFiles('test/effect.jsx');
  assert.strictEqual(result.errorCount, 0, 'effect.jsx should have no error');

  const warnings = result.messages.filter(isWarning).filter(excludeJsdoc);
  assert.deepStrictEqual(warnings.map(getRuleId).toSorted(), [
    'react-you-might-not-need-an-effect/no-derived-state',
  ]);

  assert.deepStrictEqual(
    getRuleMessageIds(
      warnings,
      'react-you-might-not-need-an-effect/no-derived-state',
    ),
    ['avoidDerivedState'],
  );
});
