import React, { useState, useEffect, useRef, useCallback, useMemo, memo, useContext, createRef } from 'react'
export default function Home(props) {
  // useMemo(() => {
  // 缓存 return出来的值
  // }, [])
  const [x, setx] = useState(1000)
  const [y, sety] = useState(1000)
  function fn() {
    let sum = 0
    for (let i = 0; i < x; i++) {
      sum += i
    }
    return sum
  }

  // 第一次 fn ->123
  // 第二次 fn ->1231
  // 将回调函数传递给子组件时：如果一个回调函数会作为 props 传递给子组件，
  // 那么使用 useCallback 可以确保子组件只在必要时才会重新渲染。
  // 使用 useMemo 时： useMemo 和 useCallback 钩子函数非常相似，
  // 都可以避免不必要的重新渲染。 在某些情况下，可以将一个回调函数同时使用 useMemo 和 useCallback 进行优化。
  // 处理复杂的回调函数：如果一个回调函数非常复杂或会导致组件重绘的开销过大，
  // 那么使用 useCallback 可以帮助我们优化应用程序的性能。
  useCallback(() => {
    setx(x + 1)
  })
  const xxx = useMemo(fn, [x])
  const onClick = () => {
    sety(y + 1)
  }
  return (
    <div className="App">
      <h1>fun:{xxx}</h1>
      <h1>x:{x}</h1>
      <h1>y:{y}</h1>
      <button onClick={onClick}>点我</button>
    </div>
  )
}
// export default function Home(props) {
//   // useRef(初始值) 返回一个对象 {current:null} 指针123
//   // ref 只执行一次 指针永远不变
//   // 用法
//   // 1.获取 dom 节点
//   // 缓存上一次的值
//   // 只有一个值可以改变current，不能给对象 添加额外的属性

//   const ref = useRef("小花")

//   // 没有初始值
//   // 每次都会执行 指针都会改变 {current:null}
//   // 用法：获取 Dom节点
//   const ref2 = createRef()

//   // 缓存上一次的值
//   const ref3 = useRef()

//   useEffect(() => {

//     console.log(ref.current, 1);
//   }, [])
//   // useState 初始化 有两种
//   // useState 同步的 还有异步的 :全部都是异步的
//   const [x, setx] = useState(0)
//   const [y, sety] = useState(() => {
//     if (x > 0) {
//       return "小花"
//     }
//     return "小白"
//   })
//   // componentDidMounth 加载完成
//   // componentDidUpdate 更新完成
//   // componentWillUnmount 卸载完成
//   useEffect(() => {
//     // componentDidMounth
//     // 只执行一次·
//     console.log("componentDidMounth");
//   }, [])

//   // 一进页面 就会执行一次
//   useEffect(() => {
//     // componentDidUpdate
//     console.log(x, "x");
//     console.log("componentDidUpdate");
//   }, [x])

//   useEffect(() => {
//     return () => {
//       // 卸载生命周期
//       // 路由跳转，页面重新渲染
//       console.log("componentWillUnmount,我卸载了");
//     }
//   }, [x])
//   const onClick = () => {
//     // setx(x + 1)
//     // setx(x + 1)

//     //缓存上一个值
//     ref3.current = x
//     //异步(不是立即执行，等一会)
//     setx(x + 1)

//     // sety(y + 1)
//     // console.log(x, "x");
//     // 输出1
//     // setx(pre => {
//     //   console.log(pre, "pre");
//     //   // return 必须写
//     //   return pre
//     // })
//   }
//   return (
//     <div>
//       <h1 ref={ref}>x:{x}</h1>
//       <h1 ref={ref}>ref3.current:{ref3.current}</h1>
//       <button onClick={onClick}>
//         点击
//       </button>
//     </div>
//   )
// }
