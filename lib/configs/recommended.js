module.exports = {
  root: true,

  parser: "babel-eslint",

  parserOptions: {
    ecmaVersion: 2018,
  },

  env: {
    es6: true,
  },

  extends: [
    require.resolve("./-private/eslint"),
    require.resolve("./-private/decorator-position"),
  ],

  overrides: [
    // JSON files
    {
      files: ["**/*.json"],
      plugins: ["json"],
      extends: ["plugin:json/recommended"],
    },
  ],
};
