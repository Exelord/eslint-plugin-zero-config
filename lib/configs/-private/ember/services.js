module.exports = {
  plugins: ["ember"],

  rules: {
    "ember/no-unnecessary-service-injection-argument": "error",
    "ember/no-unused-services": "error",
    "ember/no-restricted-service-injections": "off",
    "ember/no-implicit-service-injection-argument": "error",
  },
};
