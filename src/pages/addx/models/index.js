import { history } from 'umi'
import request from '@/utils/request'
import qs from 'qs'
export default {
  // 名字 必须唯一, 跟目录名起
  namespace: 'addx',

  state: {
    data:""
  },

  reducers: {
    
  },

  effects: {
    * addFormList({
        payload
    },{call,put,selectt}){
        let token=localStorage.getItem('token')
        const res=yield call(()=>{
            return response.post('/Home/Apis/samplePut',
                qs.stringify({
                    info:payload,
                    token
                })
            )
        })
        if(res.code===0){
            
        }
    }
  },
}

