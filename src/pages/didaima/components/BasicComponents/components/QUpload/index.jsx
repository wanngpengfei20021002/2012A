import React, { useContext, useEffect } from 'react'
import { Button, Upload, message } from 'antd'
import shortid from 'shortid'
import { connect } from 'dva'
import { Context } from '@/utils/context'

export default connect(({ QUpload }) => {
  return {
    url: QUpload.url, // 上传的图片
  }
})(QUpload)
function QUpload (props) {
  const { dispatch, url } = props
  const { 
    data, 
    setData, 
    id, // 上传图片的 id
    setId 
  } = useContext(Context)

  useEffect(() => {
    // 如果没新上传 不新增 data 数据
    if (!url) return false

    if (id) {
      setData(data.map(dt => {
        if (dt.id === id) {
          dt.title = img2(url, id)
        }
        return dt
      }))

    } else {
      const id2 = shortid.generate()
      
      data.push({
        id: id2,
        type: 'IMG',
        title: img2(url, id2),
        top: 0,
        left: 0,
        active: true,
        zihao: 12,
      })
    }
  }, [url])
  
  function img2 (imgSrc, id2) {
    console.log(document.querySelector('#' + id2), '2222222');
    const el = document.querySelector('#' + id2)
    if (el) {
      // 删除子节点
      el.parentNode.removeChild(el)
    }
    const img = document.createElement('img')
    img.src = imgSrc
    img.id = id2
    img.style.width = '100%'
    
    // 监听 img 加载完成
    img.onload = () => {
      setData(data.map(dt => {
        if (dt.id === id2) {
          dt.width = img.width
          dt.height = img.height
          return dt
        }
        return dt
      }))
      setId(id2)
    }
    return img
  }

  const beforeUpload = async file => {
    const { type } = file
    
    if (type !== 'image/jpeg') {
      message.warning('格式不对')
    }

    const formData = new FormData()
    formData.append('file', file)

    setId()
    
    await dispatch({
      type: 'QUpload/fetchUpload',
      payload: formData,
    })

    return false
  }

  return (
    <Upload
      beforeUpload={beforeUpload}
    >
      <Button>上传</Button>
    </Upload>
  )
}
