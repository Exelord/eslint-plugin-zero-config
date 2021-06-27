module.exports = {
  root: true,

  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2018,
  },

  env: {
    node: true,
  },

  extends: [
    require.resolve("./recommended.js"),
    require.resolve("./-private/node"),
  ],
};
