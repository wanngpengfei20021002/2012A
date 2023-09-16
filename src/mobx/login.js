import { makeAutoObservable } from 'mobx'
import api from '@/services'

// mobx 就是写一个 类
// state, 修改 state 方法, 异步
class LoginStore {
  constructor () {
    this.count = 0
    this.data = []
    // 所有的状态 都转成可观察数据
    makeAutoObservable(this)
  }

  // 修改 count
  setCount = opt => {
    this.count += opt
  }

  setData = opt => {
    this.data = opt
  }

  fetchList = async opt => {
    const res = await api.sampleList(opt)

    if (!res.code) {
      this.setData(res.result.list)
    }
  }
}

export default new LoginStore()
