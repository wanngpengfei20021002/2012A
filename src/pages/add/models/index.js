import { history } from 'umi'
import _ from 'lodash'
import { message } from 'antd'
import api from '@/services'
import request from '@/utils/request'
import qs from 'qs'

export default {
  // 名字 必须唯一, 跟目录名起
  namespace: 'add',

  state: {
    // 表单回填
    setmenu:[]
  },
  reducers:{
    setaddname(state,{payload}){
        return {
            ...state,
            setmenu:payload
        }
    }
  },
  effects:{
    *addDate({payload},{call,put,select}){
        const res=yield call(()=>{
            return request.post('/Home/Apis/samplePut',qs.stringify(
                {
                    token:"EXs00DaDCzxWyGtHy1Npp7I7hTO7XaYh",
                    info:{...payload}
                })
            )
        })
        console.log(res,"res");
        if(res.code==0){
            history.push('/tablex')
            yield put({
                type:"setaddname",
                payload:res
            })
        }
    }
  }

  
  
}

