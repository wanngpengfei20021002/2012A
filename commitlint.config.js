module.exports = {
  extends: [
    '@commitlint/config-conventional'
  ],

  rules: {
    'type-enum': [
      2, 
      'always', 
      [
        'feat', 'update', 'fix', 'refactor', 'optimize', 'style', 'docs', 'chore'
      ]
    ],

    /*
      类型 大小写
      [
        'lower-case', // default
        'upper-case', // UPPERCASE
        'camel-case', // camelCase
        'kebab-case', // kebab-case
        'pascal-case', // PascalCase
        'sentence-case', // Sentence case
        'snake-case', // snake_case
        'start-case' // Start Case
      ]
    */
    'type-case': [0],
    'type-empty': [0],
    // 配置描述信息 最多字符数
    'subject-max-length': [2, 'always', 5],
    // 配置描述信息 最少字符数
    'subject-min-length': [2, 'always', 4]
  }
}
