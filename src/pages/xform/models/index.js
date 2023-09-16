import { history } from 'umi'
import request from '@/utils/request'

export default {
  // 名字 必须唯一, 跟目录名起
  namespace: 'xform',

  state: {

  },

  reducers: {
    setData (state, { payload }) {
      return {
        ...state,
      }
    }
  },

  effects: {
    // 提交表单
    *pushData ({ payload }, { call, put, select }) {
      const getLst = () => {
        return request.post('/Home/Apis/samplePut', payload)
      }

      const res = yield call(getLst)

      if (!res.code) {
        // 跳转到列表
        history.push('/home')
      }
    },
  },
}

