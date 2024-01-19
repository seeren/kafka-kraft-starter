module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'prettier',
    'jest',
    'simple-import-sort',
    'eslint-plugin-import',
  ],
  extends: [
    'eslint:recommended',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:jest/recommended',
    'plugin:jest/style',
  ],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'prettier/prettier': 'warn',
    'max-lines': ['error', 200],
    'max-lines-per-function': ['error', 20],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [['^'], ['^src/(.*)$'], ['^\\.']],
      },
    ],
    'import/named': 0,
  }
};
