const {defineConfig} = require('eslint/config');

const js = require('@eslint/js');
const node = require('eslint-plugin-n');
const prettier = require('eslint-plugin-prettier/recommended');

module.exports = defineConfig([
  {
    plugins: {js, n: node},
    extends: ['js/recommended', 'n/flat/recommended-script'],
  },
  prettier,
  // Internal files
  {
    files: ['test/**', 'eslint.config.js'],
    settings: {node: {version: '20.13.0'}},
    rules: {'n/no-unpublished-require': 'off'},
  },
]);
