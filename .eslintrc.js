module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'standard',
    'airbnb-base',
    'plugin:vue/recommended',
  ],
  plugins: [
    'vue',
  ],
  rules: {
    'max-len': 0, // bad template error
    'semi': ['error', 'never'],
    'indent': 0, // for vue/script-indent
    "space-before-function-paren": ["error", { "anonymous": "always", "named": "always", "asyncArrow": "always" }],
    'import/no-unresolved': 0,
    'vue/html-self-closing': 0,
    'vue/max-attributes-per-line': ['error', {
      'singleline': 6,
      'multiline': {
        'max': 1,
        'allowFirstLine': false,
      },
    }],
    'vue/script-indent': ["error", 2, { "baseIndent": 1 }],
  }
}
