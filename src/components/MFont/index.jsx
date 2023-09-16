import React, { useEffect, useState } from 'react'
import cs from 'classnames'
import './styles.less'

/*
  <MFont 
    gradient='#F00 #0F0' // 渐变色
    text='' // 文字
    shadow={1} // 蓝色发光字体
    fontSize={fontSize} // 字体大小
    autoincrement={false} // 数字是否自增
    autoTime=50 // 自增时间
  />
*/
export default function MFont (props) {
  const {
    gradient, // 渐变色
    text, // 文本
    style = {},
    shadow = false, // 是否发光
    fontSize = '14px', // 字体大小
    autoincrement = false, // 数字是否自增
  } = props

  const [count, setCount] = useState(0)

  // 自增运算
  useEffect(() => {
    if (!autoincrement) return false
    setTimeout(() => {
      if (count + 1 < text) {
        setCount(count + 1)
      }
    }, 50)
  }, [count])

  const mergeStyle = () => {
    // 渐变
    gradient && (style.background = `linear-gradient(0, ${gradient})`)
    // 背景色
    if (shadow === 1) {
      style.textShadow = `0 0 5px #FFF`
      style.color = '#FFF'
    }
    // 字体大小
    style.fontSize = fontSize
    return style
  }

  return (
    <span 
      className="common-mfont"
      style={mergeStyle()}
    >
      <span
        className={cs({
          'common-mfont-gradient': gradient, // 渐变
        })}
      >
        {count}
      </span>
    </span>
  )
}
