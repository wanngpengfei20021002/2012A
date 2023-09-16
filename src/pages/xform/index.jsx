import React, { useState } from 'react'

/* 
  * 自定义 hook: use开头的函数组件
  * 16.8 hook
  * 封装过哪些自定义 hook
  * 为什么要用自定义 hook ?
      1. 返回任意的值 { } [ ]
      2. 可以使用 react 自带的 hook 或者使用 自定义 hook
*/
export default function use () {
  const [bool, setBool] = useState(false)

  return (
    <div onClick={onClick}>

    </div>
  );
};
