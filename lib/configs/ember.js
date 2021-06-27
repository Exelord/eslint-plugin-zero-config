module.exports = {
  root: true,
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },

  extends: [
    require.resolve("./browser.js"),
    require.resolve("./-private/ember"),
    require.resolve("./-private/decorator-position"),
    "prettier",
  ],

  overrides: [
    // node files
    {
      files: [
        ".eslintrc.js",
        ".stylelintrc.js",
        ".prettierrc.js",
        ".template-lintrc.js",
        "ember-cli-build.js",
        "index.js",
        "testem.js",
        "blueprints/*/index.js",
        "config/**/*.js",
        "tests/dummy/config/**/*.js",
        "lib/*/index.js",
        "server/**/*.js",
      ],
      excludedFiles: [
        "addon/**",
        "addon-test-support/**",
        "app/**",
        "tests/dummy/app/**",
      ],
      parserOptions: {
        sourceType: "script",
      },
      extends: [require.resolve("./node")],
    },
    {
      // Test files:
      files: ["tests/**/*-test.{js,ts}"],
      extends: ["plugin:qunit/recommended"],
    },
  ],
};
