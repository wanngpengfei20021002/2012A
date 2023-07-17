import { pathToRegexp } from 'path-to-regexp';
import { history } from 'umi';
import is from 'is_js';
import _ from 'lodash';
import api from '@/services';

// 全局
export default {
  namespace: 'xxx',

  state: {
    data: [],
    count: 15, // 后台给的
  },

  reducers: {
    setData (state, { payload }) {
      return {
        ...state,
        data: payload,
      }
    }, 
  },

  effects: {
    // 获取当前点击的路由
    *orderList({ payload }, { call, put, select }) {
      const x1 = yield select(pre => {
        // pre 是上一次的 所有的 state 的数据
        return pre.xxx.data
      })

      const res = yield call(api.orderList, payload)

      if (res.code == 200) {
        yield put({
          type: 'setData',
          payload: [...x1, ...res.data], // 4条
        })
      }
    },
  },
};
