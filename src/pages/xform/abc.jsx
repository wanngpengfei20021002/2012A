import React, { useState, useContext, forwardRef, memo, useEffect } from 'react'
import useMove from './useMove' // 自定义 hook

// hook 规则
// 1. 只能用在 函数组件 || 自定义hook组件内
// 2. 只能用在函数的最顶层 不能用在 for if 等里面
// 3. 不能用到 普通函数 或者 class 类里面
export default function Abc (props, ref) {
  const [xy, setXy]= useMove()

  return (
    <div>
      abc: {xy.x} - {xy.y}
    </div>
  )
}
