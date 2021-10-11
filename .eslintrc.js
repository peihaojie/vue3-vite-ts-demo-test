/*
 * @Date         : 2021-10-11 10:01:20
 * @LastEditors  : HaoJie
 * @LastEditTime : 2021-10-11 15:56:03
 * @FilePath     : \.eslintrc.js
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ["plugin:vue/vue3-essential", "airbnb-base", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 13,
    parser: "@typescript-eslint/parser",
    sourceType: "module"
  },
  plugins: ["vue", "@typescript-eslint"],
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly"
  },
  rules: {
    "import/no-extraneous-dependencies": "off",
    "vue/script-setup-uses-vars": "error"
  }
};
