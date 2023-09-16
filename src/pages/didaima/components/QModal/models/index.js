import _ from 'lodash'
import api from '@/services'

export default {
  namespace: 'QModal',

  state: {
    item: {}, // 裁切区域参数
  },

  reducers: {
    setItem (state, { payload }) {
      return {
        ...state,
        item: payload,
      }
    }, 
  },

  effects: {
    
  }
}

