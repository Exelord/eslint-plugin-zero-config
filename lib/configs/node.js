module.exports = {
  root: true,

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },

  env: {
    es6: true,
    node: true,
    browser: false,
  },

  extends: [
    require.resolve("./recommended.js"),
    require.resolve("./-private/node"),
  ],
};
