import { history } from 'umi'
import _ from 'lodash'
import { message } from 'antd'
import api from '@/services'
import request from '@/utils/request'
import qs from 'qs'

export default {
  // 名字 必须唯一, 跟目录名起
  namespace: 'tab',

  state: {
    // 表单回填
    resultx:[]
  },
  reducers:{
    setResult(state,{payload}){
      return {
        ...state,
        resultx:payload
      }
    }
  },
  effects:{
    *pushList({payload},{call,put,select}){
      let res=yield call(()=>{
        return request.post('/Home/Apis/sampleList',
          qs.stringify(
           {
                token:"EXs00DaDCzxWyGtHy1Npp7I7hTO7XaYh",
                "page":1,
                "limit":10
            })
        )
      })
      console.log(res,'res');
      if(res.code===0){
        let nlist=res.result.list.map(v=>{
            let n={}
            try {
                n=JSON.parse(v.info)
                delete v.info
            } catch (error) {
                
            }
            return {...n,...v}
        })
        yield put({
            type:"setResult",
            payload:nlist
          })
      }
     
    }
  }
}

