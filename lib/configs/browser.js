module.exports = {
  root: true,

  parserOptions: {
    ecmaVersion: 2018,
  },

  env: {
    es6: true,
    browser: true
  },

  plugins: ['javascript'],

  extends: [
    'plugin:javascript/recommended'
  ]
};