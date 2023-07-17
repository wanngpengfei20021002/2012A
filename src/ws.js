var WebSocketServer = require('ws').Server,
wss = new WebSocketServer({ port: 8181 }) //服务端口8181

let i = 0

console.log(WebSocketServer, 'WebSocketServer');

// connection 前端后台连接上了 
wss.on('connection', function (ws) {
  setInterval(() => {
    console.log(i, 'i');
    ws.send(i++)
  }, 5000)
  
  // message 接收前端给后台发送的数据
  ws.on('message', function (message) {
    //打印客户端监听的消息
    console.log(message, '后台接收的数据')
  })
})
