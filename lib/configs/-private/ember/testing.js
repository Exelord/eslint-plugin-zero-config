module.exports = {
  plugins: ["ember"],

  rules: {
    "ember/no-pause-test": "error",
    "ember/no-test-and-then": "error",
    "ember/no-test-import-export": "error",
    "ember/no-test-module-for": "error",
    "ember/no-legacy-test-waiters": "error",
    "ember/no-replace-test-comments": "error",
    "ember/require-valid-css-selector-in-test-helpers": "error",
    "ember/prefer-ember-test-helpers": "error",
    "ember/no-invalid-test-waiters": "error",
    "ember/no-noop-setup-on-error-in-before": "error",
    "ember/no-settled-after-test-helper": "error",
    "ember/no-test-support-import": "error",
    "ember/no-test-this-render": "error",
  },
};
