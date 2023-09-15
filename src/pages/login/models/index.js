import { history } from 'umi'
import _ from 'lodash'
import { message } from 'antd'
import api from '@/services'
import request from '@/utils/request'

export default {
  // 名字 必须唯一, 跟目录名起
  namespace: 'login',

  state: {
    // 表单回填
    result:[]
  },
  reducers:{
    setResult(state,{payload}){
      return {
        ...state,
        result:payload
      }
    }
  },
  effects:{
    *fetch({payload},{call,put,select}){
      let res=yield call(()=>{
        return request.post('/Home/Apis/Index/_c/sampleLogin',payload)
      })
      console.log(res,'res');
      if(res.code===0){
        localStorage.setItem('token',res.result.userInfo.token)
        message.success('登录成功')
        yield put({
          type:'setResult',
          payload:res
        })
        history.push('/tab')
       
      }else{
        message.error(res.msg)
      }
      
     
    }
  }
}

