import { Button, Modal } from 'antd';
import React, { useState } from 'react';

export default function QModal (props) {
  const {
    title = '', //
    open = false, // 隐藏
    setOpen = () => {},
    children = <></>,
    footer = <Button>提交</Button>,
    ...item
  } = props

  const handleOk = () => {
    setIsModalOpen(false);
  }

  // 关闭监听
  const handleCancel = () => {
    setOpen(!open)
  }

  return (
    <>
      <Modal
        title={title}
        open={open}
        onOk={handleOk} 
        footer={footer}
        onCancel={handleCancel} // 监所有关闭
        {...item}
      >
        {children}
      </Modal>
    </>
  )
}