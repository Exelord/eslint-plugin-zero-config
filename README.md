# eslint-plugin-javascript

A complete ESLint plugin for javascript projects

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-javascript`:

```
$ npm install eslint-plugin-javascript --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-javascript` globally.

## Usage

### Plugin

Add `eslint-plugin` to the plugins section of your `.eslintrc` configuration file:

```json
{
    "plugins": [
        "javascript"
    ]
}
```

### Configs

Add `javascript` to the extends section of your `.eslintrc` configuration file to extends by all recommended JS rules:

```json
{
    "extends": [
        "plugin:javascript/recommended",
    ]
}
```

#### Available Configs

- `plugin:javascript/recommended` - recommended rules
- `plugin:javascript/node` - node.js rules
- `plugin:javascript/ember` - ember.js rules






