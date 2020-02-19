module.exports = {
  plugins: ['ember'],

  rules: {
    'ember/no-actions-hash': 'error',
    'ember/no-classic-classes': 'error',
    'ember/require-tagless-components': 'error',

    'ember/no-classic-components': 'off',
    'ember/no-computed-properties-in-native-classes': 'off'
  }
}