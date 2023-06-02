import { history } from 'umi'
import _ from 'lodash'
import api from '@/services'

export default {
  // 名字 必须唯一, 跟目录名起
  namespace: 'login',

  state: {
    // 表单回填
    data: null
  },

  reducers: {
    // 修改详情
    setData (state, { payload }) {
      return {
        ...state,
        data: payload,
      }
    }
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
    }
  }
}
