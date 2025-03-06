import eslintJs from '@eslint/js';
import eslintPluginN from 'eslint-plugin-n';
import globals from 'globals';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  eslintJs.configs.recommended,
  eslintPluginN.configs['flat/recommended'],
  eslintConfigPrettier,
  {
    languageOptions: {
      globals: {
        ...globals.mocha,
      },
    },
    settings: {
      node: {version: '6'},
    },
  },
  {
    files: ['**/*.mjs'],
    languageOptions: {sourceType: 'module'},
    settings: {
      node: {version: '22'},
    },
    rules: {
      'n/no-unpublished-import': 'off',
      'n/no-extraneous-import': 'off',
    },
  },
];
