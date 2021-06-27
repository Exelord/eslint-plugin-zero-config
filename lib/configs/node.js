module.exports = {
  root: true,

  parserOptions: {
    sourceType: "module",
  },

  env: {
    node: true,
    browser: false,
  },

  extends: [
    require.resolve("./recommended.js"),
    require.resolve("./-private/node"),
  ],
};
