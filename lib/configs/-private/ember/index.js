module.exports = {
  plugins: ["ember"],

  extends: [
    require.resolve("./-private/ember/best-practices.js"),
    require.resolve("./-private/ember/computed-properties.js"),
    require.resolve("./-private/ember/deprecations.js"),
    require.resolve("./-private/ember/ember-data.js"),
    require.resolve("./-private/ember/ember-object.js"),
    require.resolve("./-private/ember/miscellaneous.js"),
    require.resolve("./-private/ember/octane.js"),
    require.resolve("./-private/ember/possible-errors.js"),
    require.resolve("./-private/ember/routes.js"),
    require.resolve("./-private/ember/services.js"),
    require.resolve("./-private/ember/stylistic-issues.js"),
    require.resolve("./-private/ember/testing.js"),
  ],
};
