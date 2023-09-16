import React, { useState } from 'react'
import { Button, Modal, Image } from 'antd'
import { QRCodeSVG } from 'qrcode.react'
import html2canvas from 'html2canvas'

export default function Header (props) {
  const [open, setOpen] = useState(false)
  const [image, setImage] = useState('')

  // 发布
  const onClick = async () => {
    const el = document.querySelector('#canvas-area-box')
    const res = await html2canvas(el)
    setImage(res.toDataURL("image/jpeg"))
    setOpen(true)
  }

  const handleOk = () => {
    setOpen(false)
  }

  const handleCancel = () => {
    setOpen(false)
  }

  return (
    <div>
      <Modal 
        title="Basic Modal"
        open={open}
        onOk={handleOk}
        zIndex={99999}
        onCancel={handleCancel}
      >
        <>
          <Image src={image} preview={false} />
          <QRCodeSVG value="https://reactjs.org/" />
        </>
      </Modal>

      <h1 onClick={onClick}>发布</h1>
    </div>
  )
}
