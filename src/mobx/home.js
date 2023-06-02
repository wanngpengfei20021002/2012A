import { makeAutoObservable } from 'mobx'

class HomeStore {
  constructor () {
    this.age = 0
    makeAutoObservable(this)
  }

  onAdd = () => {
    this.age++
    console.log(this.age, 1);
  }

  onJian = () => {
    this.age--
    console.log(this.age, 2);
  }
}

export default new HomeStore()
