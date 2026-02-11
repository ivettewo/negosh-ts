module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:playwright/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'playwright'],
  rules: {
    'no-console': 'warn',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'playwright/no-skipped-test': 'warn',
    'playwright/no-focused-test': 'error',
    'playwright/valid-expect': 'error',
    'playwright/prefer-web-first-assertions': 'warn',
    'playwright/no-useless-await': 'error',
  },
};
