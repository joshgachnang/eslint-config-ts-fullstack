module.exports = {
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "settings": {
    "react": {
      "version": "16.13.1"
    }
  },
  "plugins": [
    "prettier",
    "lodash",
    "simple-import-sort"
  ],
  "extends": [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  "rules": {
    "prefer-const": "error",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-var-require": "off",
    "simple-import-sort/imports": "error",
    "no-console": "error",
    "lodash/import-scope": [
      2,
      "method"
    ],
    "prettier/prettier": "error"
  }
};
