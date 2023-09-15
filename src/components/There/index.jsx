import React from 'react'
import MUpload from '../../components/MUpload'
import {Button,Form} from 'antd'
export default function There(props) {
  const {onChangeTAB,submitFn}=props
  return (
    <>
      <Form.Item name='imgbtn' label='图片上传'>
          <MUpload/>
      </Form.Item>
      <Form.Item>
        <Button>提交</Button>
        <Button type='text' onClick={()=>onChangeTAB("2")}>上一步</Button>
      </Form.Item>
    </>
  )
}

