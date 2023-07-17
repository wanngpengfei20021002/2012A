import React from 'react'
import { Button, Space } from 'antd'
import is from 'is_js'
import { QIcon } from '@@@'

/*
  const data = [
    {
      id: 1,
      title: 文字
      icon: {
        type: 'company',
        fontSize: 14,
        color: '#F00',
        iconAlign: 'right',
        ...接受 icon 组件的所有属性
      }
    },
    {
      id: 1,
    },
  ]
*/

/* 
  <QButton 
    data={} // 数据
    size={'a' | 'b' | 'c' | number} 按钮间距
    onClick={onClick}
    onIcon
    raduis={number}
    style
    className
    对齐
  /> 
*/

export default function QButton (props) {
  const {
    data = [], // 数据
    size = 12, // 按钮间距
    onClick = () => {}, // 点击事件
    onIcon = () => {}, // icon 点击
    raduis = 5, // ...
  } = props

  // 按钮间距类型
  let xxx = {
    a: 12,
    b: 22,
    c: 32,
  } 

  const x1 = opt => {
    onClick(opt)
  }

  const x2 = (evt, opt) => {
    console.log(evt, '1');
    evt.stopPropagation()
    onIcon(opt)
  }

  const icons = (opt, item) => {
    return (
      <QIcon 
        onClick={evt => {
          console.log(evt, 2);
          x2(evt, opt)
        }}
        {...item} 
      />
    )
  }

  return (
    <div>
      <Space
        size={is.number(size) ? size : xxx[size]} // 按钮间距
      >
        {
          data.map((dt, index) => {
            const { 
              id, 
              title, // 按钮文字
              icon, // icon
              ...item2
            } = dt

            const { iconAlign: iconAlign2 } = icon || {}
            const { iconAlign, ...item } = icon || {}

            return (
              <Button
                style={{borderRadius: raduis}}
                onClick={() => x1(dt)}
                key={id || index}
                {...item2}
              >
                {iconAlign2 === 'left' ? icons(dt, item) : null}
                {title}
                {iconAlign2 === 'right' ? icons(dt, item) : null}
              </Button>
            )
          })
        }
      </Space>
    </div>
  )
}
