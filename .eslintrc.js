/**
 * @type {import('@types/eslint').Linter.BaseConfig}
 */
module.exports = {
  extends: [`@eyecuelab/react`],
  settings: {
    jest: {
      version: 27,
    },
  },
  parserOptions: {
    project: [`./tsconfig.json`, `./cypress/tsconfig.json`],
  },
}
