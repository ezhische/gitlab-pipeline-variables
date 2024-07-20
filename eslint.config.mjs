import jsonPlugin from 'eslint-plugin-json';
import compatPlugin from 'eslint-plugin-compat';

export default [
  {
    ignores: ['node_modules/**', 'dist/**'],
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      json: jsonPlugin,
      compat: compatPlugin,
    },
    rules: {
      'semi': ['error', 'always'],
      'quotes': ['error', 'double'],
      'indent': ['error', 2],
      'no-trailing-spaces': 'error',
      'eol-last': ['error', 'always'],
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'compat/compat': 'error',
    },
  },
  {
    files: ['manifest.json'],
    plugins: {
      json: jsonPlugin,
    },
    rules: {
      'json/*': ['error', {
        'allowComments': true,
      }],
    },
  },
];