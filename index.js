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
        'jsx-quotes': ['error', 'prefer-double'],
        'react/jsx-closing-bracket-location': 2,
        'react/jsx-closing-tag-location': 2,
        'react/jsx-curly-spacing': 2,
        'react/jsx-equals-spacing': 2,
        'react/jsx-indent': 2,
        'react/jsx-indent-props': 2,
        'react/jsx-key': 2,
        'react/jsx-no-bind': 1,
        'react/jsx-no-undef': 2,
        'react/jsx-wrap-multilines': 2,
        'react/jsx-tag-spacing': 2,
        'react/jsx-uses-react': 2,
        'react/jsx-uses-vars': 2,
        'react/jsx-max-props-per-line': [2, { when: 'multiline' }],
        'react/button-has-type': 2,
        'react/no-access-state-in-setstate': 1,
        'react/no-array-index-key': 1,
        'react/no-danger': 1,
        'react/no-danger-with-children': 1,
        'react/no-did-update-set-state': 2,
        'react/no-direct-mutation-state': 2,
        'react/no-redundant-should-component-update': 2,
        'react/no-render-return-value': 2,
        'react/no-typos': 2,
        'react/no-unknown-property': 2,
        'react/no-unused-state': 2,
        'react/no-will-update-set-state': 2,
        'react/prefer-stateless-function': [2, {ignorePureComponents: true}],
        'react/require-render-return': 2,
        'react/self-closing-comp': 2,
        'react/sort-comp': 2,
        'react/style-prop-object': 2,
        'react/void-dom-elements-no-children': 2
    }
};
