// import api from '@/services';
export default {
    namespace: 'upun',
    state: {},
    reducers: {},
    effects: {
      
      *uploadFun({ payload }, { call, put, select }) {
        const res = yield call("/Home/Apis/Index/_c/upload", payload);
        return res.result;
      },
    },
  };
  