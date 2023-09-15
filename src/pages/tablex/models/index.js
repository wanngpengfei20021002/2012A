import { history } from 'umi'
import _ from 'lodash'
import { message } from 'antd'
import api from '@/services'
import request from '@/utils/request'
import qs from 'qs'

export default {
  // 名字 必须唯一, 跟目录名起
  namespace: 'tablex',

  state: {
    // 表单回填
    resultx:[],
    deletex:[],
    // xiug:[]
  },
  reducers:{
    setResult(state,{payload}){
      return {
        ...state,
        resultx:payload
      }
    },
    setDelete(state,{payload}){
      return {
        ...state,
        deletex:payload
      }
    },
    // setXiug(state,{payload}){
    //   return {
    //     ...state,
    //     xiug:payload
    //   }
    // }
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
     
    },

    *delx ({payload},{call,put,select}){
      const res=yield call(()=>{
        return request.post('/Home/Apis/Index/_c/sampleDel',
          qs.stringify(
            {
              token:"EXs00DaDCzxWyGtHy1Npp7I7hTO7XaYh",
              id:payload
            }
          )
        )
      })
      console.log(res,'res');
      if(res.code===0){
        message.success('删除成功')
        yield put({
          type:"setDelete",
          payload:res
        })
      }
    },

    // *xigx ({payload},{call,put,select}){
    //   let nStatus=checked?1:0;
    //   delete payload.info
    //   const resbtn=yield call(()=>{
    //     return request.post('/Home/Apis/samplePut',
    //       qs.stringify(
    //         {
    //           token:"EXs00DaDCzxWyGtHy1Npp7I7hTO7XaYh",
    //           info:{...payload,status:nStatus}
    //         }
    //       )
    //     )
    //   })
    //   console.log(res,'res');
    //   if(res.code===0){
    //     message.success('删除成功')
    //     yield put({
    //       type:"setXiug",
    //       payload:resbtn
    //     })
    //   }
    // }
  }

}

