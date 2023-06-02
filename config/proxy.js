import config from '../src/cfgs/common'

const { ENV } = process.env

export default {
  dev: {
    '/dev': {
      target: config.localhostUrl[ENV],
      changeOrigin: true,
      secure: false,
      pathRewrite: {
        '^/dev': ''
      },
    },
  },
}
