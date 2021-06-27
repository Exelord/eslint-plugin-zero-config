module.exports = {
  plugins: ["ember"],

  extends: [
    require.resolve("./best-practices.js"),
    require.resolve("./computed-properties.js"),
    require.resolve("./deprecations.js"),
    require.resolve("./ember-data.js"),
    require.resolve("./ember-object.js"),
    require.resolve("./miscellaneous.js"),
    require.resolve("./octane.js"),
    require.resolve("./possible-errors.js"),
    require.resolve("./routes.js"),
    require.resolve("./services.js"),
    require.resolve("./stylistic-issues.js"),
    require.resolve("./testing.js"),
  ],
};
