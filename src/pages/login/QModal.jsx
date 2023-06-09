import React, { useState, memo } from 'react'
import { Modal } from 'antd'

export default memo(function Xxx (props) {
  console.log('我是子组件 我刷新了');
  {props.x3()}
  return (
    <div>我是子组件</div>
  )
})
