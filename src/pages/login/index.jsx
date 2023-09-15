import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import _ from "lodash"
import { useEffect } from 'react'
import { connect } from 'dva'
export default connect(state => {
  return {
    loading: !!state.loading.effects["login/loginFun"]
  }
})(Login)
function Login(props) {
  const [form] = Form.useForm()
  const { dispatch, loading } = props
  //点击登录
  const onFinish = _.debounce((values) => {
    console.log(1);
    // console.log('Success:', values);
    if (values.remember) {
      localStorage.setItem("aaa", JSON.stringify(values))
    } else {
      localStorage.removeItem("aaa")
    }
    dispatch({ type: "login/loginFun", payload: values })

  }, 2000);
  useEffect(() => {
    let val = localStorage.getItem("aaa")
    // console.log(val, form);
    if (val) {
      form.setFieldsValue(val)
    }
  }, [])
  return (
    <div style={{ width: "100%", height: "100%", background: "#f1f1f1", display: "flex", alignItems: "center", justifyContent: "space-around" }}>
      <div style={{ width: "600px", height: "300px", borderRadius: "10px", display: "flex", background: "white" }}>
        <div style={{ width: "30%", height: "100%" }}>
          <img style={{ width: "100%", height: "100%" }} src="/1.png" alt="" />
        </div>
        <div style={{ width: "70%", height: "100%" }}>
          <h1 style={{ color: "skyblue", margin: "10px 0px" }}>客户登录</h1>
          <Form
            form={form}
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              name="userName"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="passWord"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>记住密码</Checkbox>
            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit" loading={loading}>
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>

    </div>
  );
};
