import React, { useState } from 'react'
import { Modal } from 'antd'

export default function Login (props) {
  const { 
    title = 'Title', // 标题
    open = false,
    onOk = () => {},
    onCancel = () => {}, 
    children = null,
    okText = '提交',
    ...item
  } = props

  const onClick = () => {
    onOk()
  }

  const onCancel2 = () => {
    onCancel()
  }

  return (
    <Modal
      title={title} // 标题
      open={open} // 打开 关闭
      onOk={onClick} // 点击确定按钮的回调
      onCancel={onCancel2} // 点击蒙版 点击 x 点击 cancel
      okText={okText}
      {...item}
    >
      {children}
    </Modal>
  )
}
