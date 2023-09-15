import { pathToRegexp } from 'path-to-regexp';
import { history } from 'umi';
import is from 'is_js';
import _ from 'lodash';
import api from '@/services';

// 全局
export default {
  namespace: 'index',

  state: {
    activeKey: {}, // 当前展示的路由页面
    routerList: [], // 记录点击的所有路由菜单
    allRouters: [], // 当前用户可访问的路由权限
    permissionList: [], // 路由权限列表
    collapse: false, // 响应式或点击trigger时控制菜单的状态
    userInfo: {}, // 用户信息
  },

  reducers: {
    setUserInfo (state, { payload }) {
      return {
        ...state,
        userInfo: payload,
      }
    }, 

    // 退出时清除路由历史记录
    setClear(state, { payload }) {
      return { ...state, routerList: payload };
    },

    setCollapse(state, { payload }) {
      return { ...state, collapse: payload };
    },
    // 保存的所有路由信息
    setRouterList(state, { payload }) {
      const routerList = [...state.routerList];

      // 如果历史记录中不存在该路由，则直接添加到routerList
      if (!_.find(routerList, payload)) {
        routerList.push(payload);
      } else {
        // 如果历史记录中存在，找到在routerList的下标
        const index = _.findIndex(routerList, payload);
        _.pullAt(routerList, index); // 移除该路由
        routerList.push(payload); // 将路由添加到历史路由末尾
      }

      return { ...state, routerList: routerList };
    },

    // 删除routerlist的标签
    setDeletRouter(state, { payload }) {
      const param = { title: payload.title, path: payload.path };
      const active = _.find(state.routerList, param);
      const index = _.findIndex(state.routerList, param); // 查找删除元素位置

      let routerList = state.routerList;
      if (routerList.length > 1) {
        // 只有当历史记录大于1时才能删除，如果只有一个，则不能删除
        routerList = _.without(state.routerList, active);
        if (index == routerList.length) {
          // 如果点击的是最后一个，才跳转到前一个页面
          history.push(routerList[index - 1].path);
        }
      }

      return { ...state, routerList: routerList };
    },

    // 当前点击的路由，根据当前页面的路由判断在路由表中是哪个页面，保存当前所有路由信息
    setActiveRouter(state, { payload }) {
      const { pathname } = history.location;
      // id: 点击通知列表返回 id
      // data: menu 数据
      let { id, data } = payload;

      // 首次请求接口使用 接口的 menu 数据
      // 点击通知列表 使用数据持久化中的 menu 数据
      data = data || state.allRouters;

      const modifyKey = (opt) => {
        opt.label = opt.title;
        // 动态渲染 menu 动态路由的 selectedKeys 路径
        if (opt.path.includes('/notice')) {
          opt.selectedKeys = `/notice/${id}`;
        } else {
          opt.selectedKeys = opt.path;
        }
      };

      data.forEach((item) => {
        if (Array.isArray(item.routes)) {
          item.subMenuKey = `/${item.routes[0].path.split('/')[1]}`;
          item.routes.map((item2) => modifyKey(item2));
        } else {
          modifyKey(item);
        }
      });

      return { ...state, allRouters: [...data] };
    },

    setNotice(state, { payload }) {
      state.allRouters[0].selectedKeys = payload;
      return { ...state, allRouters: [...state.allRouters] };
    },

    // 设置vip批量创建链接菜单高亮
    // setVipLink(state, { payload }) {
    //   state.allRouters[1].routes[1].selectedKeys = payload;
    //   return { ...state, allRouters: [...state.allRouters] };
    // },

    // 权限路由列表
    setPermissionList(state) {
      state.permissionList = []

      function getPermission(data) {
        data.forEach((dt) => {
          if (dt.path) {
            state.permissionList.push(dt.path)
          }
          if (is.object(dt.routes)) {
            getPermission(dt.routes);
          }
        });
      }
      getPermission(state.allRouters);
      return { ...state };
    },
  },

  effects: {
    // 获取当前点击的路由
    *fetchRouterList({ payload }, { call, put, select }) {
      const allRouters = yield select((state) => state.index.allRouters);
      // 在路由表中查找当前显示的路由
      let active = _.find(allRouters, { path: payload });
      if (!active) {
        _.map(allRouters, (item) => {
          const i = _.find(item.routes, { path: payload });
          if (i) return (active = i);
        });
      }
      // 如果能查找到则加入顶部路由历史记录中
      if (active) yield put({ type: 'setRouterList', payload: active });
    },

    // 获取后端返回的路由权限
    *getAllRouters({ payload, notice,market }, { call, put, select }) {
      const res = yield call(api.getMenuList);
      if (_.get(res, 'errno') == 0) {
        // 如果跳转的是通知公告页面，修改路由通知公告的path路径
        if (notice) _.set(res, 'data[0].path', history.location.pathname);
        let id = 0;
        if (!payload && !market) {
          const dt = yield call(api.getNotice, { page: 1 });
          id = _.get(dt, 'data.notice_list.0.id');
        }
        yield put({
          type: 'setActiveRouter',
          payload: { data: res.data, id: payload || id },
        });
        yield put({ type: 'setPermissionList' });
      }
    },

    // 获取用户资料信息
    *getUserInfo ({}, { call, put }) {
      const res = yield call(api.getAccoutInfo);
      yield put({
        type: 'setUserInfo',
        payload: _.get(res, 'data.user_info', {}),
      });
    },

    // payload: 传进来的参数
    // call(回调函数): 请求接口
    // put === dispatch
    *fetch ({ payload }, { call, put, select }) {
      console.log('我是以全局的');
    },
  },
};
