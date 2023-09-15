// import api from '@/services';
export default {
  namespace: 'add',
  state: {},
  reducers: {},
  effects: {
    *addFun({ payload }, { call, put, select }) {
      const res = yield call("/Home/Apis/samplePut", payload);
      if (res.code === 0) {
        window.location.href = '/list';
      }
    },
    *uploadFun({ payload }, { call, put, select }) {
      const res = yield call("/Home/Apis/Index/_c/upload", payload);
      return res.result;
    },
  },
};
