import _ from 'lodash'
import api from '@/services'
import { message } from 'antd'

export default {
  namespace: 'home',

  state: {
    data: [], // 保存列表数据
    count: 0, // 总条数
    sum: 0, // 点击量
  },

  reducers: {
    // 修改列表数据
    setData (state, { payload }) {
      const { count, list } = payload
      return {
        ...state,
        data: list.map(dt => ({ ...dt, ...JSON.parse(dt.info) })),
        count,
      }
    },

    setSum (state, { payload }) {
      return {
        ...state,
        sum: payload,
      }
    },
  },

  effects: {
    // 获取列表数据
    *fetch ({ payload }, { call, put, select }) {
      const res = yield call(api.sampleList, payload)

      if (!res.code) {
        yield put({
          type: 'setData',
          payload: res.result,
        })
      }
    },

    // 提交
    *fetchPut ({ payload }, { call, put, select }) {
      const res = yield call(api.samplePut1, payload)

      if (!res.code) {
        message.success('提交成功!')
      }
    },

    // 删除卡片
    *del ({ payload }, { call, put, select }) {
      const getLst = () => {
        return request.post('/Home/Apis/Index/_c/sampleDel', payload)
      }

      const res = yield call(getLst)

      if (!res.code) {
        // 调列表接口
        yield put({
          type: 'fetch',
          payload: {
            limit: 1,
            page: 1,
          }
        })
      }
    }
  },
}
