import _ from 'lodash'
import api from '@/services'

export default {
  // 名字 必须唯一, 跟目录名起
  namespace: 'QUpload',

  state: {

  },

  reducers: {

  },

  effects: {
    // 上传
    *fetchUpload ({ payload }, { call, put, select }) {
      const res = yield call(api.upload3, payload)

      if (!res.code) {
        return res.result
      }
    },
  }
}

