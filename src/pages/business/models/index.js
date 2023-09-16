import { pathToRegexp } from 'path-to-regexp';
import { history } from 'umi';
import is from 'is_js';
import _ from 'lodash';
import api from '@/services';

// 全局
export default {
  namespace: 'userLevel',

  state: {

  },

  reducers: {
    setUserInfo (state, { payload }) {
      return {
        ...state,
        userInfo: payload,
      }
    }, 
  },

  effects: {
    // 获取当前点击的路由
    *fetch ({ payload }, { call, put, select }) {
      const res = yield call(api.userLevel)
      console.log(res, 'res');
    },
  },
};
