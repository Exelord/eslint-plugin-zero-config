# eslint-plugin-zero-config

A complete ESLint plugin for javascript projects

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-zero-config`:

```
$ npm install eslint-plugin-zero-config --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-zero-config` globally.

## Usage

### Plugin

Add `eslint-plugin` to the plugins section of your `.eslintrc` configuration file:

```json
{
    "plugins": [
        "zero-config"
    ]
}
```

### Configs

Add `zero-config` plugin and extend your config with zero-conifg!

##### Available Configs

- `plugin:zero-config/recommended` - recommended config for all environments
- `plugin:zero-config/browser` - browser config
- `plugin:zero-config/node` - node.js config
- `plugin:zero-config/ember` - ember.js config

** Remember! There is no need to include a few of them. Each of them are fully configured to bring best possible experience **

Example:

```json
{
    "plugins": ["zero-config"],
    "extends": ["plugin:zero-config/node"]
}
```







