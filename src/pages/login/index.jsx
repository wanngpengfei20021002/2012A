import React, { useContext, useEffect, useRef, useState, useMemo, useCallback, useImperativeHandle } from 'react'
import { connect } from 'dva'
import { QIcon } from '@@@'
import './styles.less'
export default connect(state => {
  return {

  }
})(Login)
function Login (props) {
  const { dispatch } = props

  // useEffect(() => {
  //   (async () => {
  //     const res = dispatch({
  //       type: 'login/weatherInfo',
  //       payload: {
  //         key: '31564783a6adc5c44b617badc3531158',
  //         city: 110101,
  //       }
  //     })
  //     console.log(res, 1);
  //   })()
  // }, [])

  return (
    <div styleName="login-box">
      <QIcon 
        type="icon2-company" 
      />
      {/* <div styleName="xx0 x">小花</div>
      <div styleName="xx1 x">小白</div>
      <div styleName="xx2 x">小蓝</div>
      <div styleName="x">小花1</div>
      <div styleName="x">小白1</div>
      <div styleName="x">小蓝1</div>
      <div styleName="x">小花2</div>
      <div styleName="x">小白2</div>
      <div styleName="x">小蓝2</div> */}
    </div>
  )
}
