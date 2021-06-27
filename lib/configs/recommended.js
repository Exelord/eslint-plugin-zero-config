module.exports = {
  root: true,

  extends: [require.resolve("./-private/eslint")],

  overrides: [
    // JSON files
    {
      files: ["**/*.json"],
      plugins: ["json"],
      extends: ["plugin:json/recommended"],
    },
  ],
};
