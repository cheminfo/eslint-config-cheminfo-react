import eslintReact from '@eslint-react/eslint-plugin';
import { defineConfig } from 'eslint/config';
import reactHooks from 'eslint-plugin-react-hooks';
import { reactRefresh } from 'eslint-plugin-react-refresh';
import reactEffects from 'eslint-plugin-react-you-might-not-need-an-effect';
import globals from 'globals';

import { restrictedGlobals } from './no_restricted_globals.js';
import { nameReplacements, nameReplacementsAllowList } from './utilities.js';

export default defineConfig(
  // Add the jsx extension to linted files.
  {
    name: 'cheminfo/react/lint-jsx',
    files: ['**/*.jsx'],
  },
  {
    name: 'cheminfo/react/base-config',
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
          jsxPragma: null,
        },
      },
    },
    extends: [eslintReact.configs.strict, reactHooks.configs.flat.recommended],
    plugins: {
      'react-refresh': reactRefresh.plugin,
      'react-you-might-not-need-an-effect': reactEffects,
    },
  },
  {
    name: 'cheminfo/react/js',
    extends: [eslintReact.configs.strict],
  },
  {
    name: 'cheminfo/react/ts',
    files: ['**/*.{ts,tsx}'],
    extends: [eslintReact.configs['strict-type-checked']],
  },
  {
    name: 'cheminfo/react/js-overrides',
    rules: {
      // https://github.com/NickvanDyke/eslint-plugin-react-you-might-not-need-an-effect#-rules
      ...reactEffects.configs.recommended.rules,

      'no-restricted-globals': ['error', ...restrictedGlobals],

      'unicorn/name-replacements': [
        'error',
        {
          replacements: nameReplacements,
          allowList: nameReplacementsAllowList,
        },
      ],

      // https://react.dev/reference/eslint-plugin-react-hooks
      'react-hooks/exhaustive-deps': 'error', // Is warn in the preset.
      // TODO: enable when we start using the React compiler.
      'react-hooks/preserve-manual-memoization': 'warn',

      'react-refresh/only-export-components': [
        'error',
        { extraHOCs: ['styled'] },
      ],

      // https://eslint-react.xyz/docs/rules
      '@eslint-react/no-array-index-key': 'warn',
      '@eslint-react/dom-no-unsafe-target-blank': 'error',
      '@eslint-react/exhaustive-deps': 'error',
    },
  },
);
