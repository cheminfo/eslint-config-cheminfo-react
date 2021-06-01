'use strict';

module.exports = {
  env: {
    browser: true,
    node: false,
  },
  globals: {
    process: true, // For process.env
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['cheminfo'],
  plugins: ['react', 'react-hooks'],
  settings: {
    react: {
      version: 'detect',
    },
    linkComponents: [{ name: 'Link', linkAttribute: 'to' }],
  },
  overrides: [
    // Add the jsx extension to linted files.
    { files: ['*.jsx'] },
    {
      files: ['**/__tests__/**/*.{js,jsx,ts,tsx}', '*.test.{js,jsx,ts,tsx}'],
      env: {
        node: true,
      },
    },
  ],
  rules: {
    'no-process-env': 'off',

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    'react/boolean-prop-naming': 'off',
    'react/button-has-type': [
      'error',
      {
        button: true,
        submit: true,
        reset: false,
      },
    ],
    'react/default-props-match-prop-types': 'error',
    'react/destructuring-assignment': 'off',
    'react/display-name': 'off',
    'react/forbid-component-props': 'off',
    'react/forbid-dom-props': 'off',
    'react/forbid-elements': 'off',
    'react/forbid-prop-types': 'off',
    'react/forbid-foreign-prop-types': 'error',
    'react/no-access-state-in-setstate': 'error',
    'react/no-array-index-key': 'warn',
    'react/no-danger': 'warn',
    'react/no-danger-with-children': 'warn',
    'react/no-deprecated': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': 'off',
    'react/no-redundant-should-component-update': 'error',
    'react/no-render-return-value': 'error',
    'react/no-set-state': 'off',
    'react/no-string-refs': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-unknown-property': 'error',
    'react/no-unsafe': 'error',
    'react/no-unused-prop-types': 'error',
    'react/no-unused-state': 'error',
    'react/no-will-update-set-state': 'error',
    'react/prefer-es6-class': 'error',
    'react/prefer-stateless-function': [
      'error',
      { ignorePureComponents: true },
    ],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/require-optimization': 'off',
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    'react/sort-comp': 'error',
    'react/sort-prop-types': 'off',
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error',

    'react/jsx-boolean-value': 'error',
    'react/jsx-filename-extension': 'off',
    'react/jsx-handler-names': 'off',
    'react/jsx-key': 'error',
    'react/jsx-max-depth': 'off',
    'react/jsx-no-bind': 'off',
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
    'react/jsx-no-literals': 'off',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-pascal-case': ['error', { allowAllCaps: true }],
    'react/jsx-sort-default-props': 'off',
    'react/jsx-sort-props': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
  },
};
