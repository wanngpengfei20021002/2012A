import React, { useState, useRef } from 'react'
import ReactCrop, { centerCrop, makeAspectCrop, Crop } from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'

// mediaWidth 宽度
// mediaHeight 高度
// aspect 宽高比
// 设置裁切的位置, 大小
function centerAspectCrop (mediaWidth: number, mediaHeight: number, aspect: number) {
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

export default function App () {
  const [imgSrc, setImgSrc] = useState('')
  const imgRef = useRef<HTMLImageElement>(null)
  const [crop, setCrop] = useState<Crop>()
  const aspect = 16 / 9

  function onSelectFile (e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      setCrop(undefined)
      const reader = new FileReader()
      // 监听 FileReader 读取 上传的二进制流完成
      reader.addEventListener('load', () => {
        // 图片地址
        console.log(reader.result?.toString(), 1);
        setImgSrc(reader.result?.toString() || '')
      })
      reader.readAsDataURL(e.target.files[0])
    }
  }

  function onImageLoad (e: React.SyntheticEvent<HTMLImageElement>) {
    if (aspect) {
      // currentTarget: 表示触发事件的当前的节点
      // target: 当前触发事件的节点
      const { width, height } = e.currentTarget
      console.log(width, 1);
      
      setCrop(centerAspectCrop(width, height, aspect))
    }
  }

  return (
    <div className="App">
      <div className="Crop-Controls">
        {/* accept 你只能上传哪些文件 */}
        <input type="file" accept="image/jpeg" onChange={onSelectFile} />
      </div>

      {!!imgSrc && (
        <ReactCrop
          // 确定要裁剪的图片的位置
          crop={crop}
          onChange={(_, percentCrop) => setCrop(percentCrop)}
          // 裁切区域的宽高比
          aspect={aspect}
        >
          <img
            ref={imgRef}
            alt="Crop me"
            src={imgSrc}
            onLoad={onImageLoad}
          />
        </ReactCrop>
      )}
    </div>
  )
}