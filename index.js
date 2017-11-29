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
        'react/jsx-curly-spacing': 'error',
        'react/jsx-equals-spacing': 'error',
        'react/jsx-tag-spacing': 'error',
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/jsx-max-props-per-line': [1, { when: 'multiline' }]
    }
};
