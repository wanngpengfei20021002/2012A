import React, { useState, useEffect } from 'react'
import ReactCrop, { centerCrop, makeAspectCrop } from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'

// mediaWidth 宽度
// mediaHeight 高度
// aspect 宽高比
// 设置裁切的位置, 大小
function centerAspectCrop (mediaWidth, mediaHeight, aspect) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: '%',
        width: 90,
      },
      aspect,
      mediaWidth,
      mediaHeight,
    ),
    mediaWidth,
    mediaHeight,
  )
}

export default function QCrop (props) {
  const { width = 0, height = 0 } = props
  const { children } = props
  const [crop, setCrop] = useState()
  const aspect = 16 / 9

  useEffect(() => {
    console.log(1111);
    if (aspect) {
      setCrop(centerAspectCrop(width, height, aspect))
    }
  }, [])

  return (
    <ReactCrop
      // 确定要裁剪的图片的位置
      crop={crop}
      onChange={(_, percentCrop) => setCrop(percentCrop)}
      // 裁切区域的宽高比
      aspect={aspect}
    >
      {children}
    </ReactCrop>
  )
}
