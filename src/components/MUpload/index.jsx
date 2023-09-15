import React, { useMemo } from 'react'
import {message, Upload} from 'antd'
const MUpload=(props)=> {
  const {value=[],onChange}=props
  const nVal=useMemo(()=>{
    let narr=[]
    narr=value.map(v=>{
        if(typeof v==="string"){
          return {url:v,status:"done",uid:v};
        }else{
            return v
        }
    })
    return narr
  },[value])
  const ChangeImg=(obj)=>{
    const {file,fileList}=obj
    let list=fileList.map(v=>{
      if(v.status==="done"){
        if(v.response){
          if(file.response.code===200){
            return (`http://vueshop.glbuys.com/userfiles/head/${file.response.data.msbox}`)
          }
        }else{
          return v.url
        }
      }
      return v
    })
    onChange(list)
  }
  const beforeUpload=(file)=>{
    const isType=file.type==='image/png'
    if(!isType){
        message.error('只能上传png类型的图片')
        return Upload.LIST_IGNORE
    }
    const isSize=file.size<=40*1024
    if(!isSize){
        message.error('上传的图片已超过40kb')
        return Upload.LIST_IGNORE
    }
  }
  return (
    <div>
      <Upload
        action="http://vueshop.glbuys.com/api/user/myinfo/formdatahead?token=1ec949a15fb709370f"
        beforeUpload={beforeUpload}
        name='headfile'
        listType='picture-card'
        isImageUrl={()=>true}
        fileList={nVal}
        onChange={ChangeImg}
        maxCount={3}
      >
        上传
      </Upload>
    </div>
  )
}

export default MUpload
