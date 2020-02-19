module.exports = {
  plugins: ['ember'],

  rules: {
    'ember/use-ember-get-and-set': ['error', { 'ignoreNonThisExpressions': true }],
    'ember/no-get': 'error',
    'ember/no-jquery': 'error',
    'ember/no-new-mixins': 'error',
    'ember/no-unnecessary-index-route': 'error',
    'ember/no-unnecessary-route-path-option': 'error',
    'ember/no-unnecessary-service-injection-argument': 'error',
    'ember/no-volatile-computed-properties': 'error',
    'ember/route-path-style': 'error',
    'ember/no-get-with-default': 'error',

    'ember/require-computed-macros': 'off',
    'ember/alias-model-in-controller': 'off',
    'ember/named-functions-in-promises': 'off',
  }
}