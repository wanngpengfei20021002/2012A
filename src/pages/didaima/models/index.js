import _ from 'lodash'
import api from '@/services'

export default {
  namespace: 'didaima',

  state: {
    item: {}, // 裁切区域参数
    data2: [],
  },

  reducers: {
    setData2 (state, { payload }) {
      return {
        ...state,
        data2: payload,
      }
    }, 
  },

  effects: {
    
  }
}

