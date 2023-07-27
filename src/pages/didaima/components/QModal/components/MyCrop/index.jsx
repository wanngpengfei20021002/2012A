import React, { useState, forwardRef } from 'react'
import ReactCrop, { centerCrop, makeAspectCrop } from 'react-image-crop'
import { connect } from 'dva'
import 'react-image-crop/dist/ReactCrop.css'

function MyCrop (props) {
  const { url, dispatch, refInstance } = props
  const [crop, setCrop] = useState()
  const aspect = 16 / 9 // 比例

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

  function onImageLoad (e) {
    if (aspect) {
      // currentTarget: 表示触发事件的当前的节点
      // target: 当前触发事件的节点
      const { width, height } = e.currentTarget
      setCrop(centerAspectCrop(width, height, aspect))
    }
  }

  // 拖拽完成实时改变裁切区域大小
  const onChange = (_, percentCrop) => {
    // percentCrop 确定要裁剪的图片的位置参数
    setCrop(percentCrop)
  }

  // 拖拽完成实时保存裁切区域数据
  // onComplete(a, b)
  // a 像素 参数
  // b 百分比的参数
  const onComplete = async ({ unit, ...item }) => {
    console.log(item, 'item');
    dispatch({
      type: 'QModal/setItem',
      payload: item,
    })
  }

  return (
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
        ref={refInstance}
        alt="Crop me"
        src={url}
        onLoad={onImageLoad}
      />
    </ReactCrop>
  )
}

MyCrop = connect(({ QUpload }) => {
  return {
    url: QUpload.url, // 
  }
})(MyCrop)

// refInstance 不能取 ref 名字 
export default forwardRef((props, ref) => <MyCrop {...props} refInstance={ref} />)