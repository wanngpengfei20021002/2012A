import { pathToRegexp } from 'path-to-regexp';
import { history } from 'umi';
import is from 'is_js';
import _ from 'lodash';
import api from '@/services';

// 全局
export default {
  namespace: 'myform',

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
    *fetchRouterList({ payload }, { call, put, select }) {
      // const allRouters = yield select((state) => state.index.allRouters);
      // // 在路由表中查找当前显示的路由
      // let active = _.find(allRouters, { path: payload });
      // if (!active) {
      //   _.map(allRouters, (item) => {
      //     const i = _.find(item.routes, { path: payload });
      //     if (i) return (active = i);
      //   });
      // }
      // // 如果能查找到则加入顶部路由历史记录中
      // if (active) yield put({ type: 'setRouterList', payload: active });
    },
  },
};
