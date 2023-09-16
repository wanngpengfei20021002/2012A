import React, { useEffect, useState, useRef } from 'react'
import url from '@/cfgs/common'

export default function useSocket (props) {
  const [ws, setWs] = useState()
  
  useEffect(() => {
    const ws = new WebSocket('ws://localhost:3199/socket.io')

    // 设置请求头
    // ws.setRequestHeader('Cookie', 'PHPSESSID=n3visp72ru5ip89jidlnlaa933');

    setWs(ws)

    ws.addEventListener('open', () => {

    })
    
    ws.addEventListener('message', () => {

    })

    ws.addEventListener('error', () => {

    })

    ws.addEventListener('close', () => {

    })
  }, [])

  return {
    ws,
  }
}

