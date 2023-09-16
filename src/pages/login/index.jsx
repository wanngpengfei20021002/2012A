// import React, { useState } from 'react'
// import { DndProvider } from 'react-dnd'
// import { HTML5Backend } from 'react-dnd-html5-backend'
// import Example from './example'
// import  './styles.less'

// export default function Login (props) {
//   return (
//     <div className="App">
//       <DndProvider backend={HTML5Backend}>
//         <Example />
//       </DndProvider>
//     </div>
//   )
// }

import React,{useState} from 'react'
import {Checkbox, Form,Input,Button} from 'antd'
import _ from 'lodash'
import './styles.less'
import { connect } from 'dva'
import { useEffect } from 'react'
export default connect(state=>{
  return {
    result:state.login.result
  }
})(Login)
function Login(props) {
  const {dispatch,result}=props
  const [form]=Form.useForm()
  const [clientReady, setClientReady] = useState(false);
  useEffect(() => {
    setClientReady(true);
  }, []);
  useEffect(()=>{
    let list=localStorage.getItem('UserInfo')
    let btn=JSON.parse(list)
    if(btn){
      form.setFieldsValue(btn)
    }
  })
  const submit=_.debounce((values)=>{
    dispatch({
      type:'login/fetch',
      payload: values
    })
    if(values.remember){
      localStorage.setItem('UserInfo',JSON.stringify(values))
    }else{
      localStorage.removeItem('UserInfo')
    }
  },2000)
  return (
    <div styleName='appbtn'>
      <div styleName='appbox'>
        <div styleName='appx'>
          <img src="/35.png" alt="" />
        </div>
        <div styleName='appRight'>
          <h2>客户登录</h2>
          <Form
            form={form}
            onFinish={submit}
            wrapperCol={
             {
              span:19,
              offset:2
             }
            }
          >
            <Form.Item
              name='userName'
            >
              <Input placeholder='请输入用户名'/>
            </Form.Item>
            <Form.Item
              name='passWord'
            >
              <Input placeholder='请输入密码'/>
            </Form.Item>
            <Form.Item name='remember' valuePropName='checked'>
              <Checkbox>记住密码</Checkbox>
            </Form.Item>
            <Form.Item shouldUpdate>
              {
                ()=>(
                  <Button
                  type="primary"
                  htmlType="submit"
                  disabled={
                    !clientReady ||
                    !form.isFieldsTouched(true) ||
                    !!form.getFieldsError().filter(({ errors }) => errors.length).length
                  }
                >
                  登录
                </Button>
                )
              }
            </Form.Item>
          </Form>
        </div>
      </div>
      
     
    </div>
  )
}
