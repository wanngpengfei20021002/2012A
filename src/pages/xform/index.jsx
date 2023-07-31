import React, { useState, useRef, useEffect } from 'react'
import { connect } from 'dva'
import * as echarts from 'echarts'
import { Button, Upload, message, Image } from 'antd'

export default connect(state => {
  return {}
})(App)
function App (props) {
  const { dispatch } = props
  
  dispatch({
    type: 'login/fetchLogin',
    payload: {
      userName: 'dove112',
      passWord: 'passwd',
    }
  })
  dispatch({
    type: 'login/fetchLogin',
    payload: {
      userName: 'dove112',
      passWord: 'passwd',
    }
  })
  
  return (
    <div>
      
    </div>
  )
}


