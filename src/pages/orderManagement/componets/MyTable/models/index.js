import _ from 'lodash';
import api from '@/services';

// 全局
export default {
  namespace: 'mytable',

  state: {
    datax: [],
  },

  reducers: {
    setUserInfo (state, { payload }) {
      return {
        ...state,
        datax: payload,
      }
    }, 
  },

  effects: {
    // 获取当前点击的路由
    *fetch ({ payload }, { call, put, select }) {
      const res = yield call(api.fetchSampleList, payload)

      console.log(res, 'res');
      yield put({ 
        type: 'setUserInfo', 
        payload: res.result.list,
      })
    },
  },
};
