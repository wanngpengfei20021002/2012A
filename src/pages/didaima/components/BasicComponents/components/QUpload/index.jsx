import React, { useContext, useEffect, useRef, useState } from 'react'
import { Button, Upload, message, Image } from 'antd'
import shortid from 'shortid'
import { connect } from 'dva'
import { Context } from '@/utils/context'

export default connect(state => {
  return {}
})(QUpload)
function QUpload (props) {
  const { dispatch } = props
  const { data, setData } = useContext(Context)

  function img2 (imgSrc, id) {
    const img = document.createElement('img')
    img.src = imgSrc
    img.style.width = '100%'
    // 监听 img 加载完成
    img.addEventListener('load', () => {
      setData(data.map(dt => {
        if (dt.id === id) {
          dt.width = img.width
          dt.height = img.height
          return dt
        }
        return dt
      }))
    })
    return img
  }

  const beforeUpload = async file => {
    const { type } = file
    const id = shortid.generate()
    
    if (type !== 'image/jpeg') {
      message.warning('格式不对')
    }

    const formData = new FormData()
    formData.append('file', file)

    const url = await dispatch({
      type: 'QUpload/fetchUpload',
      payload: formData,
    })

    data.push({
      id,
      type: 'IMG',
      title: img2(url, id),
      top: 0,
      left: 0,
      active: true,
      zihao: 12,
    })
  }

  return (
    <Upload
      beforeUpload={beforeUpload}
    >
      <Button>上传</Button>
    </Upload>
  )
}
