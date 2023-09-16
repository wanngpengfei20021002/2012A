import devServer from './proxy'
import config from '../src/cfgs/common'

const { ENV } = process.env

const publicPath = () => {
  if (ENV) {
    return ENV.includes('start') ? '/': config.publicPath[ENV]
  
  } else {
    return '/'
  }
}

export default {
  // 不同环境的静态资源前缀
  publicPath: publicPath(),
  proxy: devServer['dev'],
}
