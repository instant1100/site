// eslint-disable-next-line import/no-extraneous-dependencies
const path = require('path');

const webpackConfigPath = './webpack.config.js';

module.exports = {
  extends: ['airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    'project': './tsconfig.json',
    'tsconfigRootDir': './'
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  globals: {
    __DEV__: true,
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: path.resolve(__dirname, webpackConfigPath),
      },
    },
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-filename-extension': 0,
    'react/jsx-props-no-spreading': 0,
    'arrow-body-style': 0,
    'import/prefer-default-export': 0,
    'react/no-array-index-key': 0,
    'react/prop-types': 0,
    'react/jsx-props-no-multi-spaces': 0,
    'no-unused-vars': 'warn',
    'comma-dangle': ['error', 'always-multiline'],
    'import/no-absolute-path': 0,
    'import/extensions': 0,

    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error']
  },
};
