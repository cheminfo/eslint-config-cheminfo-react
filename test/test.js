'use strict';

// make sure config is valid
const { ESLint } = require('eslint');

const eslint = new ESLint({ overrideConfigFile: 'eslintrc.test.yml' });

eslint.lintFiles(['test/ok.js']).catch(error => {
  console.error(error);
  process.exit(1);
});
