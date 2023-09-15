import { makeAutoObservable } from 'mobx'
import api from '@/services'

// 2按钮 + -
// 1按钮 请求接口数据

class LoginStore {
  constructor () {
    this.count = 0
    this.data = []
    // 所有的状态 都转成可观察数据
    makeAutoObservable(this)
  }

  onAdd = () => {
    this.count++
    console.log(this.count, 1);
  }

  onJian = () => {
    this.count--
    console.log(this.count, 2);
  }

  fetchData = async opt => {
    const res = await api.fetchSampleList(opt)
    this.data = res
  }
}

export default new LoginStore()
