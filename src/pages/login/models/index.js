import { history } from 'umi'
import _ from 'lodash'
import { message } from 'antd'
import api from '@/services'

export default {
  // 名字 必须唯一, 跟目录名起
  namespace: 'login',

  state: {
    // 表单回填
    data: null,
  },

  reducers: {
    // 修改详情
    setData (state, { payload }) {
      return {
        ...state,
        data: payload,
      }
    },
  },

  effects: {
    // 登录
    *fetchLogin ({ payload }, { call, put, select }) {
      const res = yield call(api.login2, payload)

      if (!res.code) {
        localStorage.setItem('token', _.get(res, 'result.userInfo.token'))
        // 跳转到列表
        history.push('/home')
        return res
      }
    },
    
    // 详情
    *sampleInfo ({ payload }, { call, put, select }) {
      const res = yield call(api.sampleInfo, payload)

      if (!res.code) {
        return res.result
      }
    },
    
    // 上传
    *samplePut ({ payload }, { call, put, select }) {
      const res = yield call(api.samplePut, payload)

      if (!res.code) {
        message.success('提交成功!')
      }
    },

    // 上传
    *fetchUpload ({ payload }, { call, put, select }) {
      const res = yield call(api.upload3, payload)

      if (!res.code) {
        return res.result
      }
    },
    
    // 上传
    *weatherInfo ({ payload }, { call, put, select }) {
      const res = yield call(api.weatherInfo, payload)

      if (!res.code) {
        return res
      }
    },
  }
}
