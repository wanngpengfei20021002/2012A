import { history } from 'umi'
import request from '@/utils/request'

export default {
  // 名字 必须唯一, 跟目录名起
  namespace: 'uploadx',

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
    *fetchUpload ({ payload }, { call, put, select }) {
      const res = yield call(()=> {
        return request.uploadPost('/Home/Apis/Index/_c/upload', payload)
      }) 
      if (!res.code) {
        return res.result
      }
    },
  },
}
