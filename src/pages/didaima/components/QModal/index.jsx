import React, { useContext, useRef } from 'react'
import { Modal } from 'antd'
import html2canvas from 'html2canvas'
import { connect } from 'dva'
import { Context } from '@/utils/context'
import MyCrop from './components/MyCrop'

export default connect(({ QModal, QUpload }) => {
  return {
    item: QModal.item, // 裁切区域数据
  }
})(QModal)
function QModal (props) {
  const { open, item, dispatch } = props
  const ref = useRef(null)
  const { setOpen } = useContext(Context)

  // 获取裁切后的图片
  const htmltobase64 = async () => {
    const res = await html2canvas(ref.current, { ...item, useCORS: true })
    dispatch({
      type: 'QUpload/setUrl',
      // res.toDataURL("image/jpeg") 转成 base64
      payload: res.toDataURL("image/jpeg")
    })
  }

  const handleOk = () => {
    htmltobase64()
    setOpen(false)
  }

  return (
    <Modal 
      title="裁切" 
      open={open}
      zIndex={10000}
      onOk={handleOk}
      onCancel={() => setOpen(false)}
    >
      <MyCrop 
        ref={ref}
      />
    </Modal>
  )
}
