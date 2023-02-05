module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [],
  // add your custom rules here
  rules: {
    'no-console': 0, // console.log書いても怒られないように
    camelcase: 0, // キャメルケースで書いても怒られないように
    'vue/multi-word-component-names': 0,
    'no-var': 2, // varは禁止
  },
}
