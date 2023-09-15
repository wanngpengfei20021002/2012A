import React, { memo, useEffect, useRef, useState, useLayoutEffect, useContext, useCallback } from 'react'

export default memo(function Abc (props) {
  // 第一次 { fn: 123 }
  // 第二次 { fn: 123 }
  console.log('我是子组件');
  props.fn()
  return (
    <div>
      子组件
    </div>
  )
})
