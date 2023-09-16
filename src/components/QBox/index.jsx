import React from 'react'
import cs from 'classnames'
import './styles.less'

export default function QBox (props) {
  const {
    raduis = '5px', // 圆角
    children = <></>,
    border = 'none',
    padding = '17px',
    style = {},
    className = ''
  } = props

  return (
    <div 
      className={cs('componets-qbox', {[className]: className})}
      raduis={raduis}
      style={{...style, border, padding}}
    >
      {children}
    </div>
  )
}
