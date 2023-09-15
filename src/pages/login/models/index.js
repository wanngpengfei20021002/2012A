
export default {
  namespace: 'login',

  state: {
    user: '',
  },

  reducers: {
    getLogin(state, { payload }) {
      return {
        ...state,
        user: payload,
      };
    },
  },

  effects: {
    *loginFun({ payload }, { call, put, select }) {
      const res = yield call("/Home/Apis/Index/_c/sampleLogin", payload);
      console.log(res);
      yield put({
        type: 'getLogin',
        payload: res.result.userInfo,
      });
      if (res.code === 0) {
        localStorage.setItem('token',res.result.userInfo.token);
        
        window.location.href = '/cars';
      }else{
        let timer=setInterval(()=>{
          let n=60
          n--
          if(n==0){
            clearInterval(timer)
          }
        })
      }
    },
  },
};
