module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/strongly-recommended',
    '@vue/airbnb',
  ],
  rules: {
    // 禁用 console
    'no-console': 'off',
    // 禁用 debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 禁用一元操作符 ++ 和 --，但允许在 for 循环的最后一个表达式中使用 ++ 和 --
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    // 禁止出现未使用过的变量
    'no-unused-vars': 'warn',
    // 强制一行的最大长度
    'max-len': 'off',
    // 强制使用一致的换行风格
    'linebreak-style': 'off',
    // 禁止对 function 的参数进行重新赋值
    'no-param-reassign': 'off',
    // 待补充
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never',
    }],
    // 导出js文件时，优先使用 export default 而非 export
    'import/prefer-default-export': 'off',
    // Define a style for the component name in template casing for consistency purposes
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    // Limits the maximum number of attributes/properties per line to improve readability
    'vue/max-attributes-per-line': ['error', {
      singleline: 3,
      multiline: {
        max: 1,
        allowFirstLine: true,
      },
    }],
    // Require a line break before and after the contents of a singleline element
    'vue/singleline-html-element-content-newline': 'off',
    // Require default value to be set for each props that are not marked as required (except Boolean props)
    'vue/require-default-prop': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};