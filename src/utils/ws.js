
// 创建 websoket
export class Ws {
  constructor (opt) {
    console.log('constructor');
    const { 
      ws, // 创建 websoket 的链接
      open = () => {}, // 链接成功的回调
      message = () => {}, // 拿到数据回调
    } = opt
    // 创建一个 ws 的实例
    this.ws = new WebSocket(ws)
    this.ws.addEventListener('open', open)
    this.ws.addEventListener('message', message)
  }
}



