import React, { useState } from 'react'
import { Button, Input, message } from 'antd'
import { connect } from 'dva'
import './styles.less'

console.log('改登录');

export default connect(state => ({
  
}))(Login)
function Login (props) {
  const { dispatch } = props
  const onClick = async () => {
    await dispatch({
      type: 'login/fetchLogin',
      payload: {
        userName: 'wangliang555',
        passWord: 'wangliang555',
      }
    })
    message.success('登录成功!')
  }

  return (
    <>
      <Button onClick={onClick}>退出2</Button>
    </>
  )
}
