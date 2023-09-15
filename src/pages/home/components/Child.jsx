import React, { memo } from "react"
export default memo(Abc)
// 返回一个新组件
// memo第二个参数是可选的

// memo 不写第二个参数,memo自动比较 上一次 props 和下一次 props的值
// 基础类型 比较值
// 引用类型 比较指针

// 第一次{ x: 1000, y: 1000 }
// 第二次{ x: 1000, y: 1001 }

// memo(组件, (nextProps, preprops) => {
// 人为 比较 这值
// return false 不重新渲染
// return true 重新渲染
// })
function Abc(props) {
    console.log("我是子组件 我渲染");
    return (
        <div>我是子组件</div>
    )
}