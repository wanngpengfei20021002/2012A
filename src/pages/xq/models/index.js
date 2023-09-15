

export default {
    namespace: 'xq',
    state: {

    },
    reducers: {

    },
    effects: {
        *listFun({ payload }, { call, put, select }) {
            const res = yield call("/Home/Apis/Index/_c/sampleDel", payload);
            const list = JSON.parse(res.result.info)
            return list
        },
    },
};
