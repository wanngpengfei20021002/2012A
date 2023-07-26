import React, { useState, useEffect, useRef, useContext } from 'react'
import ReactCrop, { centerCrop, makeAspectCrop } from 'react-image-crop'
import html2canvas from 'html2canvas'
import { Context } from '@/utils/context'
import { canvasPreview } from './canvasPreview'
import useDebounceEffect from './useDebounceEffect'
import 'react-image-crop/dist/ReactCrop.css'

// 配置项
const setup = {
  useCORS: true, // 使用跨域
};

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
  const { data, setData } = useContext(Context)
  const previewCanvasRef = useRef()
  const [completedCrop, setCompletedCrop] = useState()
  const { width = 0, height = 0, title } = props
  const { children } = props
  const [crop, setCrop] = useState()
  const aspect = 16 / 9

  useEffect(() => {
    console.log(1111);
    if (aspect) {
      setCrop(centerAspectCrop(width, height, aspect))
    }
  }, [])

  useDebounceEffect(
    async () => {
      if (
        completedCrop?.width &&
        completedCrop?.height &&
        previewCanvasRef.current
      ) {
        canvasPreview(
          title,
          previewCanvasRef.current,
          completedCrop,
        )
      }
    },
    100,
    [completedCrop],
  )

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

  function onDownloadCropClick() {
    if (!previewCanvasRef.current) {
      throw new Error('Crop canvas does not exist')
    }

    // console.log(previewCanvasRef.current.toBlob, 11111);

    html2canvas(previewCanvasRef.current, setup).then((canvas) => {
      const link = canvas.toDataURL("png");
      
      
      document.body.appendChild(img2(link, data[0].id))
      // data[0].title = img2(link, data[0].id)
      // setData([...data])
        // this.exportPicture(link, "文件名");
      // document.body.appendChild(canvas); // 自动在下方显示绘制的canvas图片
    });
  }

  return (
    <>
      <ReactCrop
        // 确定要裁剪的图片的位置
        crop={crop}
        onChange={(_, percentCrop) => setCrop(percentCrop)}
        // 裁切区域的宽高比
        aspect={aspect}
        onComplete={c => {
          console.log(c, 'c');
          setCompletedCrop(c)
        }}
      >
        {children}
      </ReactCrop>

      <canvas
        ref={previewCanvasRef}
        style={{
          border: '5px solid #F00',
          objectFit: 'contain',
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 300,
        }}
      />

      <button onClick={onDownloadCropClick}>点我</button>
    </>
    
  )
}
