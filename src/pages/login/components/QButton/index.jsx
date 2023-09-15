import React, { memo, useState, useEffect, useRef, useMemo } from 'react'
import { Input, Button } from 'antd-mobile'
import io from 'socket.io-client';
import shortid from 'shortid'
import x1 from '@/assets/images/default.png'
import x2 from '@/assets/images/headPortrait.png'
import x3 from '@/assets/images/error.png'
import './styles.less'



export default function QButton (props) {
  const { list, setList } = props

  // 获取 input 节点
  const ref = useRef()
  // websoket
  // 组件初始化的时候调用一次
  const socket = useMemo(() => io('http://localhost:3199'), [])

  // 发送
  const onClick = () => {
    const title = ref.current.nativeElement.value
    // emit(参数1, 参数2, ...): 发送给后台 websoket
    socket.emit('sendMsg', {
      Content: ref.current.nativeElement.value,
      CreateDateUtc: new Date(),
      timeStmp: new Date().getTime(),
    })
    // 自增数据
    setList([...list, {
      id: shortid.generate(),
      title,
      xxx: 1, // 表示展示到右侧
    }])
  }
  
  const onClick2 = opt => {
    // emit(参数1, 参数2, ...): 发送给后台 websoket
    socket.emit('sendMsg', {
      Content: 101,
      CreateDateUtc: new Date(),
      timeStmp: new Date().getTime(),
    })
    // 自增数据
    setList([...list, {
      id: shortid.generate(),
      img: opt,
      xxx: 1, // 表示展示到右侧
    }])
  }
  
  return (
    <div styleName="button">
      <img src='/src/assets/images/default.png' />
      <Input styleName="input" ref={ref} />
      <Button>图片</Button>
      <Button>ICON</Button>
      <Button onClick={onClick}>发送</Button>
      <ul>
        <li onClick={() => onClick2(101)}><img src={x1} /></li>
        <li onClick={() => onClick2(201)}><img src={x2} /></li>
        <li><img src={x3} /></li>
      </ul>
    </div>
  )
}
