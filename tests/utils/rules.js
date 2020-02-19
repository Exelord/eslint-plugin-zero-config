const glob = require('glob');
const path = require('path');

const eslintDir = path.dirname(require.resolve('eslint/package.json'));

const eslintRulesPaths = glob.sync(`${eslintDir}/lib/rules/*.js`, {});

const eslintRules = eslintRulesPaths.map((filePath) => {
  const rule = require(filePath);
  const regexp = `^${eslintDir}/lib/rules/(?<ruleName>.+)\.js`
  const { ruleName } = filePath.match(regexp).groups
  
  if (ruleName === 'index') return
  
  return { name: ruleName, deprecated: rule.meta && rule.meta.deprecated }
}).filter((a) => a);

const pluginRulesFilesPaths = glob.sync('lib/configs/-private/eslint/*.js', {});

const pluginRules = pluginRulesFilesPaths.map((filePath) => {
  const ruleFiles = require(`../../${filePath}`);
  return Object.keys(ruleFiles.rules).map((name) => ({ name }))
}).flat();

module.exports = {
  eslintRules,
  pluginRules
}