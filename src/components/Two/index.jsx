import { Form, Select, Switch,Button,Checkbox,Col,Row } from 'antd'
import React from 'react'

function Two(props) {
  const {form,onChangeTAB}=props
  const oneSubmitFn=()=>form.validateFields(['backuser','spcation','state']).then(values=>onChangeTAB('1')).catch(err=>{})
  const onChange = (checkedValues) => {
    console.log('checked = ', checkedValues);
  };
  const onShow=(obj)=>{
    return (
      obj.getFieldValue("backuser")==="账号二"||
        obj.getFieldValue("backuser")==="账号三"?
        <Form.Item
          name="spcation"
          label="操作规范"
          rules={[{required:true,message:"请选择操作规范"}]}
        >
          <Checkbox.Group
            style={{
              width: '100%',
            }}
            onChange={onChange}
          >
              <Row>
                <Col span={8}>
                  <Checkbox value="A">A</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="B">B</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="C">C</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="D">D</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="E">E</Checkbox>
                </Col>
              </Row>
          </Checkbox.Group>
        </Form.Item>:null
    )
  }
  return (
    <div>
      <>
        <Form.Item
          name="state"
          label="状态"
          initialValue="0"
          rules={[{required:true,message:"请选择状态"}]}
        >
          <Switch/>
        </Form.Item>
        <Form.Item
          name="backuser"
          label="操作账号"
          rules={[{required:true,message:"操作账号为必选项"}]}
        >
          <Select placeholder="请选择...">
            <Select.Option value="账号一">账号一</Select.Option>
            <Select.Option value="账号二">账号二</Select.Option>
            <Select.Option value="账号三">账号三</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          noStyle
          shouldUpdate
        >
          {onShow}
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={oneSubmitFn}>下一步</Button>
          <Button type="text" onClick={()=>onChangeTAB("1")}>上一步</Button>
        </Form.Item>
      </>
    </div>
  )
}

export default Two
