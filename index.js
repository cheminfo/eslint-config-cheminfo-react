'use strict';

module.exports = {
    env: {
        es6: true,
        browser: true
    },
    parserOptions: {
        ecmaVersion: '2017',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            experimentalObjectRestSpread: true
        }
    },
    extends: 'eslint-config-cheminfo',
    plugins: [
        'react'
    ],
    rules: {
        'react/jsx-closing-bracket-location': 'error',
        'react/jsx-closing-tag-location': 'error',
        'react/jsx-curly-spacing': 'error',
        'react/jsx-equals-spacing': 'error',
        'react/jsx-indent': 'error',
        'react/jsx-indent-props': 'error',
        'react/jsx-key': 'error',
        'react/jsx-no-bind': 'warning',
        'react/jsx-space-before-closing': 'error',
        'react/jsx-wrap-multilines': 'error',
        'react/jsx-tag-spacing': 'error',
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/jsx-max-props-per-line': ['error', { when: 'multiline' }],
        'react/button-has-type': 'error',
        'react/no-access-state-in-setstate': 'warning',
        'react/no-array-index-key': 'warning',
        'react/no-danger': 'warning',
        'react/no-danger-with-children': 'warning',
        'react/no-did-update-set-state': 'error',
        'react/no-direct-mutation-state': 'error',
        'react/no-redundant-should-component-update': 'error',
        'react/no-render-return-value': 'error',
        'react/no-typos': 'error',
        'react/no-unknown-property': 'error',
        'react/no-unused-state': 'error',
        'react/no-will-update-set-state': 'error',
        'react/prefer-stateless-function': ['error', {ignorePureComponents: true}],
        'react/self-closing-comp': 'error',
        'react/sort-comp': 'error',
        'react/style-prop-object': 'error',
        'react/void-dom-elements-no-children': 'error',
    }
};
