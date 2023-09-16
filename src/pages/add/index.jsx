import React,{useEffect} from 'react'
import {Form,Input,Select, Button, Switch,Checkbox,Col,Row} from 'antd'
import MUpload from '../../components/MUpload'
import SUpload from '../../components/SUpload'
import {useHistory,useLocation} from 'umi'
import { connect } from 'dva'
import qs from 'qs'
export default connect((v)=>{
  return {
    setmenu:v.add.setmenu,
  }
})(Add)
function Add(props) {
  const [form]=Form.useForm()
  const {dispatch,setmenu}=props
  const {search}=useLocation()
  const submit=(values)=>{
    console.log(values);
    dispatch({
      type:'add/addDate',
      payload:values
    })
  }
  const onChange = (checkedValues) => {
    console.log('checked = ', checkedValues);
  };
  useEffect(()=>{
    if(search){
        let obj=qs.parse(search.substring(1))
        form.setFieldsValue(obj)
    }
  },[search])
  return (
    <div>
      <Form form={form} onFinish={submit}>
        <Form.Item name='id' label='ID'>   
            <Input disabled/>
        </Form.Item>
        <Form.Item name='name' label='消息名称'>   
            <Input/>
        </Form.Item>
        <Form.Item name='age' label='所属公众号'>   
            <Select>
                <Select.Option value="陌陌">陌陌</Select.Option>
                <Select.Option value="八维博大">八维博大</Select.Option>
            </Select>
        </Form.Item>
        <Form.Item name='price' label='接受粉丝1'>
            <Select>
                {
                    new Array(51).fill('').map((v,i)=>{
                        return <Select.Option key={i} value={i}>{i}</Select.Option>
                    })
                }
            </Select>
        </Form.Item>
        <Form.Item name='status' label='发送状态' valuePropName='checked'>
          <Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked />
        </Form.Item>
        <Form.Item name='imgbtn' label='图片上传'>
          <MUpload/>
        </Form.Item>
        <Form.Item name='imgx' label='图片上传2'>
          <SUpload/>
        </Form.Item>
        <Form.Item name='list' label='操作账号'>
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
        </Form.Item>
        <Form.Item name='row' label='收藏状态' valuePropName='checked'>
          <Switch defaultChecked/>
        </Form.Item>
        <Form.Item>
            <Button type="primary" htmlType="submit">添加</Button>
        </Form.Item>
      </Form>
    </div>
  )
}
