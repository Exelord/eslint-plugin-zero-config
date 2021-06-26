module.exports = {
  extends: [
    require.resolve("./-private/eslint/best-practices.js"),
    require.resolve("./-private/eslint/es6.js"),
    require.resolve("./-private/eslint/possible-errors.js"),
    require.resolve("./-private/eslint/strict-mode.js"),
    require.resolve("./-private/eslint/stylistic-issues.js"),
    require.resolve("./-private/eslint/variables.js"),
  ],
};
