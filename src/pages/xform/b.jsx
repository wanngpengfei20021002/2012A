import React, { useState, useEffect, forwardRef, memo } from 'react'
import useMove from './useMove' // 自定义 hook

export default 
// export default memo(Hoc(B), isEqual)
function B (props) {
  const [xy, setXy]= useMove()

  return (
    <div>
      b组件 {xy.x} - {xy.y}
    </div>
  )
}

// // HOC: 传入一个组件 返回一个新组件的函数
// function Hoc (Com) {
//   return () => {
//     const xxx = useContext(Context)
//     console.log(xxx, 'xxx');
//     return <Com xxx={xxx} />
//   }
// }
