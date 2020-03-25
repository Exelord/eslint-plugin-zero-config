module.exports = {
  plugins: ['decorator-position'],

  rules: {
    'decorator-position/decorator-position': [
      'error',
      {
        defaults: {
          properties: 'inline',
          methods: 'above'
        }
      }
    ]
  }
};
