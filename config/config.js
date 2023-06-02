import { defineConfig } from 'umi'
// import theme from '../src/theme/variables'
import theme from './theme.config'
import routes from './router.config'
import env from './env'

const pxtorem = require('postcss-pxtorem')

const path = require('path')

export default defineConfig({
  ...env,
  hash: true,
  // 异步加载 懒加载
  dynamicImport: {
    // loading: '@/pages/loading',
  },
  targets: {
    ie: 11,
  },
  antd: {
    mobile: false,
  },
  define: {
    environment: process.env.ENV,
  },
  // 别用
  alias: {
    '@': path.resolve(__dirname, '../src'),
    '@@@': path.resolve(__dirname, '../src/components'),
    '@assets': path.resolve(__dirname, '../src/assets/images'),
    '@less':path.resolve(__dirname, '../src/theme/mixins.less')
  },
  routes,
  theme, // 皮肤
  ignoreMomentLocale: true,
  manifest: {
    basePath: '/',
  },
  fastRefresh: {},
  webpack5: {},
  exportStatic: {},
  inlineLimit: 10000,
  extraBabelPlugins: [
    [
      'react-css-modules',
      {
        exclude: 'node_modules', // 排除 node_modules 所有 css 不走 styleName编译
        generateScopedName: '[name]__[local]___[hash:base64:5]', // 哈希规则
        filetypes: { // 哪些后缀走 sytleName解析
          '.less': {
            syntax: 'postcss-less',
          },
        },
      },
    ],
  ],
  // extraPostCSSPlugins: [ //配置额外的 postcss 插件。
  //   pxtorem({
  //     // 1500
  //     // 350 / 10 = 35
  //     rootValue: 70, // 指定转换倍率 我现在设置这个表示1rem=10px;
  //     propList: ['*'], // 属性列表，表示你要把哪些css属性的px转换成rem，这个*表示所有
  //     selectorBalckList: ['.antd-'], // 匹配不被转换为rem的选择器，例如UI框架antd-mobile
  //     exclude: /node_modules/i,
  //   }),
  // ],
  cssLoader: {
    modules: {
      auto: function (opt) {
        // 这2个文件不走 styleName 编译
        const index = path.normalize('src/styles/index.less')
        const components = path.normalize('src/components')

        return !opt.includes('node_modules')
          && !opt.includes(index)
          && !opt.includes(components)
      },
      localIdentName: '[name]__[local]___[hash:base64:5]'
    },
  },
  // dva: {
  //   immer: true,
  // }
  // mfsu: {},
})
