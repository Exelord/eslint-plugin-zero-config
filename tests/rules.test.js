const rules = require('./utils/rules');

it('does not use deprecated rules', () => {
  const deprecatedRules = rules.eslintRules.filter((rule) => rule.deprecated && rules.pluginRules.includes(rule.name));
  expect(deprecatedRules.length).toBe(0);
});

it('specifies all rules', () => {
  const eslintRules = rules.eslintRules.filter((rule) => !rule.deprecated);
  expect(rules.pluginRules.map((rule) => rule.name).sort()).toEqual(eslintRules.map((rule) => rule.name).sort());
});