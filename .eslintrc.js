module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  parser: 'babel-eslint',
  plugins: ['react', 'prettier'],
  settings: {
    react: {
      version: '^16.4.2',
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    commonjs: true,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    'no-console': 'off',
    strict: ['error', 'global'],
    curly: 'warn',
  },
};
