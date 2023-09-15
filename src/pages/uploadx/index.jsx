import React,{ useState } from 'react'
import { Form,Upload } from 'antd'
import { connect } from 'dva'
import { PlusOutlined } from '@ant-design/icons';
import shortid from 'shortid';
import { ListConsumer } from 'antd/lib/list';
export default connect(state=>{
    return {

    }
})(Uploadx)
function Uploadx(props) {
  const {dispatch}=props
  const [form]=Form.useForm()
  const [list,setList]=useState([])
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  const onBeforeUpload=async file=>{
    const {type,size}=file
    if(type!=='image/jpeg'){
        return false
    }
    if(size>100*1024*1024){
        return false
    }
    const formData=new FormData()
    formData.append('file',file)

    const url=await dispatch({
        type:'uploadx/fetchUpload',
        payload:formData
    })

    list.push({
        uid:shortid.generate(),
        name:'image.png',
        status:'done',
    
    
    
        url,
    })
    setList([...list])
    return false
  }                   
  return (
    <Form form={form}>
        <Form.Item
            name="upload"
            label="Upload"
        > 
             <Upload
                name="logo"
                listType="picture-card"
                fileList={list}
                beforeUpload={onBeforeUpload}
            >
              {uploadButton}
            </Upload>
        </Form.Item>
    </Form>
  )
}

