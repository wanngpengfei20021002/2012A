import _ from 'lodash'
import api from '@/services'

const url = 'https://img1.baidu.com/it/u=624792125,331972384&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'

export default {
  namespace: 'QUpload',

  state: {
    url: '', // 上传图片
  },

  reducers: {
    setUrl (state, { payload }) {
      return {
        ...state,
        url: payload || url,
      }
    }, 
  },

  effects: {
    // 上传
    *fetchUpload ({ payload }, { call, put, select }) {
      const res = yield call(api.upload3, payload)

      if (!res.code) {
        yield put({
          type: 'setUrl',
        })
      }
    },
  }
}

