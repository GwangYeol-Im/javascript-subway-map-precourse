module.exports = {
  plugins: ["prettier"],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "no-new": "off",
    "class-methods-use-this": "off",
    "import/no-named-as-default": "off",
    "no-underscore-dangle": "off",
    "no-console": "off",
    "no-alert": "off",
    "max-depth": ["error", 2],
    "max-lines-per-function": ["error", 15],
  },
};
