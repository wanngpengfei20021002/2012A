import api from '@/services';

export default {
  namespace: 'card',
  state: {
    data: [],
    count: 0,
  },
  reducers: {
    getList(state, { payload }) {
      return {
        ...state,
        data: payload.list,
        count: payload.count,
      };
    },
  },
  effects: {
    *listFun({ payload }, { call, put, select }) {
      const res = yield call("/Home/Apis/sampleList", payload);
      const list = res.result.list.map((v) => {
        return { ...JSON.parse(v.info), ...v };
      });
      console.log(list);
      const count = res.result.count;
      yield put({
        type: 'getList',
        payload: {
          list,
          count,
        },
      });
    },
    *addFun({ payload }, { call, put, select }) {
      const res = yield call("/Home/Apis/samplePut", payload);
      yield put({
        type: 'listFun',
        payload: {
          page: 1,
          limit: 3,
        },
      });
    
    },
    *delFun({ payload }, { call, put, select }) {
      const res = yield call("/Home/Apis/Index/_c/sampleDel", payload);
      yield put({
        type: 'listFun',
        payload: {
          page: 1,
          limit: 3,
        },
      });
    },
  },
};
