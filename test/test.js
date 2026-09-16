import assert from 'node:assert';
import test from 'node:test';

import { loadESLint } from 'eslint';

import {
  getRuleId,
  getRuleMessageIds,
  isError,
  isNotJsdoc,
  isWarning,
} from './rule_helpers.js';

const ESLint = await loadESLint();
/**
 * @type {import('eslint').ESLint}
 */
const eslint = new ESLint();

test('ok', async () => {
  const [result] = await eslint.lintFiles('test/ok.jsx');
  assert.strictEqual(result.errorCount, 0, 'ok.jsx should have no error');
  assert.strictEqual(
    result.messages.filter(isNotJsdoc).length,
    0,
    'ok.jsx should have no warning',
  );
});

test('not ok - JS', async () => {
  const [result] = await eslint.lintFiles('test/not_ok.jsx');

  assert.deepStrictEqual(
    result.messages
      .filter(isError)
      .map(getRuleId)
      .toSorted((a, b) => a.localeCompare(b)),
    [
      '@eslint-react/dom-no-unsafe-target-blank',
      '@eslint-react/exhaustive-deps',
      // React is defined but never used
      'no-unused-vars',
      'react-hooks/exhaustive-deps',
      'react-hooks/immutability',
    ],
  );

  assert.strictEqual(
    result.messages.filter(isWarning).filter(isNotJsdoc).length,
    0,
    'not_ok.jsx should not have warnings',
  );
});

test('not ok - TS', async () => {
  const [result] = await eslint.lintFiles('test/not_ok_ts.tsx');

  assert.deepStrictEqual(
    result.messages
      .filter(isError)
      .map(getRuleId)
      .toSorted((a, b) => a.localeCompare(b)),
    [],
  );

  assert.deepStrictEqual(
    result.messages
      .filter(isWarning)
      .filter(isNotJsdoc)
      .map(getRuleId)
      .toSorted((a, b) => a.localeCompare(b)),
    ['@eslint-react/no-unused-props'],
  );
});

test('you might not need an effect', async () => {
  const [result] = await eslint.lintFiles('test/effect.jsx');

  const errors = result.messages.filter(isError);
  assert.deepStrictEqual(
    errors.map(getRuleId).toSorted((a, b) => a.localeCompare(b)),
    ['react-hooks/set-state-in-effect'],
  );

  const warnings = result.messages.filter(isWarning).filter(isNotJsdoc);
  assert.deepStrictEqual(
    warnings.map(getRuleId).toSorted((a, b) => a.localeCompare(b)),
    [
      '@eslint-react/set-state-in-effect',
      'react-you-might-not-need-an-effect/no-derived-state',
    ],
  );

  assert.deepStrictEqual(
    getRuleMessageIds(
      warnings,
      'react-you-might-not-need-an-effect/no-derived-state',
    ),
    ['avoidDerivedState'],
  );
});
