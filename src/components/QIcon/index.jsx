import React from 'react'
import { createFromIconfontCN } from '@ant-design/icons'

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_3885987_mi8jj3zrpy.js',
})

export default function QIcon (props) {
  const {
    type = `company`, // icon的类型
    fontSize = `${fontSize || 14}px`, // 图标大小
    // color = '#000', // 图标颜色
    onClick = () => {}, // 点击事件
    style = {}, // style
    ...item // 支持所有其他的 antd 原生属性
  } = props

  const onClick2 = () => {
    onClick(props)
  }

  return (
    <IconFont
      style={{fontSize, ...style}}
      type={`icon2-${type}`}
      onClick = {onClick2}
      {...item}
    />
  )
}
