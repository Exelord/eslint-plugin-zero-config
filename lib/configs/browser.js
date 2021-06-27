module.exports = {
  root: true,

  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2018,
  },

  env: {
    browser: true,
  },

  extends: [require.resolve("./recommended.js")],
};
