import React, { useState, useRef } from 'react'
import ReactCrop, { centerCrop, makeAspectCrop } from 'react-image-crop'
import { connect } from 'dva'
import html2canvas from 'html2canvas'
import { Button, Upload, message, Image } from 'antd'

import 'react-image-crop/dist/ReactCrop.css'

// mediaWidth 宽度
// mediaHeight 高度
// aspect 宽高比
// 设置裁切的位置, 大小
function centerAspectCrop (mediaWidth, mediaHeight, aspect) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: '%', // 单位 % || px
        width: 90, // 默认宽度
      },
      aspect,
      mediaWidth,
      mediaHeight,
    ),
    mediaWidth,
    mediaHeight,
  )
}

export default connect(state => {
  return {}
})(App)
function App (props) {
  const { dispatch } = props
  const [imgSrc, setImgSrc] = useState('')
  const imgRef = useRef(null)
  const ref = useRef(null)
  const [crop, setCrop] = useState()
  const aspect = 16 / 9 // 比例

  function onImageLoad (e) {
    if (aspect) {
      // currentTarget: 表示触发事件的当前的节点
      // target: 当前触发事件的节点
      const { width, height } = e.currentTarget
      setCrop(centerAspectCrop(width, height, aspect))
    }
  }

  // 拖拽完成触发的
  // onComplete(a, b)
  // a 像素 参数
  // b 百分比的参数
  const onComplete = async ({ unit, ...item }) => {
    const canvas = await html2canvas(imgRef.current, { ...item, useCORS: true, })
    ref.current.innerHTML = ''
    ref.current.appendChild(canvas)
  }

  const beforeUpload = async file => {
    const formData = new FormData()
    formData.append('file', file)

    const url = await dispatch({
      type: 'QUpload/fetchUpload',
      payload: formData,
    })
    const url2 = 'https://img0.baidu.com/it/u=1604010673,2427861166&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889'
    setImgSrc(url2)
    return false
  }

  // 拖拽完成
  const onChange = (_, percentCrop) => {
    // percentCrop 确定要裁剪的图片的位置
    setCrop(percentCrop)
  }

  return (
    <div className="App">
      <Upload
        beforeUpload={beforeUpload}
      >
        <Button>上传</Button>
      </Upload>

      {imgSrc && (
        <ReactCrop
          // 确定要裁剪的图片的位置
          crop={crop}
          onChange={onChange}
          // 裁切区域的宽高比
          aspect={aspect}
          // 获取裁切后的图片
          onComplete={onComplete}
        >
          <img
            ref={imgRef}
            alt="Crop me"
            src={imgSrc}
            onLoad={onImageLoad}
          />
        </ReactCrop>
      )}
      <div ref={ref}></div>
    </div>
  )
}
