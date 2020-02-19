module.exports = {
  plugins: ['ember'],

  rules: {
    'ember/no-arrow-function-computed-properties': 'error',
    'ember/no-deeply-nested-dependent-keys-with-each': 'error',
    'ember/no-ember-super-in-es-classes': 'error',
    'ember/no-incorrect-calls-with-inline-anonymous-functions': 'error',
    'ember/no-invalid-debug-function-arguments': 'error',
    'ember/require-computed-property-dependencies': 'error',
    'ember/require-return-from-computed': 'error'
  }
}