const {defineConfig} = require('eslint/config');
const js = require('@eslint/js');
const eslintPluginN = require('eslint-plugin-n');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');

module.exports = defineConfig([
  {
    plugins: {js, n: eslintPluginN},
    extends: ['js/recommended', 'n/flat/recommended-script'],
  },
  eslintPluginPrettierRecommended,
  // Internal files
  {
    files: ['test/**', 'eslint.config.js'],
    settings: {node: {version: '20.13.0'}},
    rules: {'n/no-unpublished-require': 'off'},
  },
]);
