import React from 'react'
import { Button, Space } from 'antd'
import { QIcon } from '../'
import cs from 'classnames'
import './styles.less'

/* 
  // Button 布局 right left center
  // 间距
  // 大小
  // icon 左边 右边 (icon 单独客店)
  // 幽灵按钮 颜色随便配
  // 几排按钮 
  // 更多
  // id 传 不传
*/
export default function QButton (props) {
  const {
    data = [],
    spaceSize = 20,
    justify = 'left',
    radius = 2,
    onIcon = () => {}, // icon 回调
    onClick = () => {}, // 按钮回调
    size = 'middle' // 'large | middle | small' | 'x1' | 'x2'
  } = props

  const fn = (itype, dt) => (
    <QIcon 
      type={itype} 
      onClick={evt => {
        evt.stopPropagation()
        onIcon(dt)
      }}
    />
  )

  return (
    <div 
      className="common-qbutton" 
      style={{justifyContent: justify}}
    >
      <Space
        size={spaceSize}
        className="xxx"
      >
        {
          // 单排循环
          data.map((dt, index) => {
            const { 
              title, // 
              iconPosition = 'right', 
              itype = '',
              ...item 
            } = dt
            return (
              <Button
                key={index} {...item}
                className={size}
                onClick={() => onClick(dt)}
              >
                {dt.title}
              </Button>
            )
          })
        }
      </Space>
    </div>
  )
}
