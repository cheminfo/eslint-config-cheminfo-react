import assert from 'node:assert';

import { loadESLint } from 'eslint';

const ESLint = await loadESLint({ useFlatConfig: true });
/** @type {import('eslint').ESLint} */
const eslint = new ESLint();

const [okResult] = await eslint.lintFiles(['test/ok.jsx']);

assert.strictEqual(okResult.errorCount, 0, 'ok.jsx should have no error');
