module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },
  'extends': ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:storybook/recommended", "@calendar-widgets/eslint-config"],
  'overrides': [],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': ['@typescript-eslint'],
  'rules': {
    '@typescript-eslint/no-unused-vars': 'off',
    'no-extra-parens': 'off',
    'no-shadow': 'off',
    'prefer-destructuring': 'off',
  }
};