import { defineConfig } from 'eslint/config';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import reactEffects from 'eslint-plugin-react-you-might-not-need-an-effect';
import globals from 'globals';

import { restrictedGlobals } from './noRestrictedGlobals.js';

export default defineConfig(
  // Add the jsx extension to linted files.
  {
    name: 'cheminfo/react/lint-jsx',
    files: ['**/*.jsx'],
  },
  {
    name: 'cheminfo/react/rules',
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
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'react-you-might-not-need-an-effect': reactEffects,
    },
    settings: {
      react: {
        version: 'detect',
      },
      linkComponents: [{ name: 'Link', linkAttribute: 'to' }],
    },
    rules: {
      // https://github.com/NickvanDyke/eslint-plugin-react-you-might-not-need-an-effect#-rules
      'react-you-might-not-need-an-effect/no-derived-state': 'warn',
      'react-you-might-not-need-an-effect/no-chain-state-updates': 'warn',
      'react-you-might-not-need-an-effect/no-initialize-state': 'warn',
      'react-you-might-not-need-an-effect/no-event-handler': 'warn',
      'react-you-might-not-need-an-effect/no-pass-live-state-to-parent': 'warn',
      'react-you-might-not-need-an-effect/no-reset-all-state-when-a-prop-changes':
        'warn',
      'react-you-might-not-need-an-effect/no-manage-parent': 'warn',
      'react-you-might-not-need-an-effect/no-empty-effect': 'warn',

      'no-restricted-globals': ['error', ...restrictedGlobals],

      'react-hooks/exhaustive-deps': 'error',
      'react-hooks/react-compiler': 'error',
      'react-hooks/rules-of-hooks': 'error',

      'react-refresh/only-export-components': 'error',

      // https://github.com/jsx-eslint/eslint-plugin-react
      // Last rules review: v7.32.2
      'react/button-has-type': [
        'error',
        {
          button: true,
          submit: true,
          reset: false,
        },
      ],
      'react/no-array-index-key': 'warn',
      'react/no-children-prop': 'error',
      'react/no-danger': 'warn',
      'react/no-danger-with-children': 'error',
      'react/no-deprecated': 'error',
      'react/no-find-dom-node': 'error',
      'react/no-is-mounted': 'error',
      'react/no-render-return-value': 'error',
      'react/no-string-refs': 'error',
      'react/no-this-in-sfc': 'error',
      'react/no-typos': 'error',
      'react/no-unescaped-entities': 'error',
      'react/no-unknown-property': 'error',
      'react/no-unsafe': 'error',
      // Allow as props to support Blueprint's `xxxRenderer` pattern.
      'react/no-unstable-nested-components': ['error', { allowAsProps: true }],
      'react/no-unused-prop-types': 'error',
      'react/self-closing-comp': 'error',
      'react/style-prop-object': 'error',
      'react/void-dom-elements-no-children': 'error',
      'react/jsx-boolean-value': 'error',
      'react/jsx-key': 'error',
      'react/jsx-no-comment-textnodes': 'error',
      'react/jsx-no-constructed-context-values': 'error',
      'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
      // TODO: enable when https://github.com/jsx-eslint/eslint-plugin-react/issues/3292 is fixed.
      'react/jsx-no-leaked-render': 'off',
      'react/jsx-no-target-blank': ['error', { allowReferrer: true }],
      'react/jsx-no-undef': 'error',
      'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
      'react/jsx-pascal-case': ['error', { allowAllCaps: true }],
      'react/jsx-uses-react': 'off',
      'react/jsx-uses-vars': 'error',
    },
  },
);
