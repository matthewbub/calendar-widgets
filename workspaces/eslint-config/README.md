# @calendar-widgets/eslint

This is an internal package. We use the ESLint rules defined in this package throughout the workspaces in this project. Feel free to use them if you'd like.

## Use case

Install as a devDependency 

```shell
pnpm add @calendar-widgets/eslint-config --save-dev
```

Add the `@calendar-widgets/eslint-config` to the `extends` field of the ESLint configuration file 

```js
module.exports = {
  'extends': ['@calendar-widgets/eslint-config']
};
```
