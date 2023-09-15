import React, { useCallback, useEffect, useMemo } from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { connect } from 'dva'
import { QModal } from '@@@'

/* 
  <UserLevel 
    open
  />
*/

export default connect(({ }) => {
  return {
    
  }
})(UserLevel)
function UserLevel(props) {
  const { dispatch } = props

  const {
    open = false, // 弹窗展开 隐藏
  } = props

  useEffect(() => {
    dispatch({
      type: 'userLevel/fetch'
    })
  }, [])

  return (
    <QModal
      title="用户"
      open={open}
    >
      <Form
        name="basic"
        labelCol={{span: 8}}
        wrapperCol={{span: 16}}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </QModal>
  )
}




