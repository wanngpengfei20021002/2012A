import React from 'react'
import {Form,Select,Button,Input,DatePicker} from 'antd'
export default function One(props) {
  const {form,onChangeTAB}=props
  const oneSubmitFn=()=>form.validateFields(['account','data','timer']).then(values=>onChangeTAB('1')).catch(err=>{})
  const onShow=(obj)=>{
    return (
      obj.getFieldValue("account")==='淘宝'||
      obj.getFieldValue('account')==='抖音'?
      <Form.Item
        name="timer"
        label="发送时间"
        rules={[{required:true,message:"发送时间不能为空"}]}
      >
        <Input placeholder='请输入...'/>
      </Form.Item>:null
    )
  }
  return (
    <>
      <Form.Item
        name="account"
        label="所属公众号"
        rules={[{required:true,message:"所属公众号不能为空"}]}
      >
        <Select placeholder="请选择...">
          <Select.Option value="微信">微信</Select.Option>
          <Select.Option value="淘宝">淘宝</Select.Option>
          <Select.Option value="抖音">抖音</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="data"
        label="日期"
        rules={[{required:true,message:"日期不能为空"}]}
      >
        <DatePicker
            showTime
            format={"YYYY-MM-DD"}
            picker="data"
        />
      </Form.Item>
      <Form.Item noStyle shouldUpdate>
        {onShow}
      </Form.Item>
      <Form.Item>
        <Button onClick={oneSubmitFn}>下一步</Button>
      </Form.Item>
    </>
  )
}
