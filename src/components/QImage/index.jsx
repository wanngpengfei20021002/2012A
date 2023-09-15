import React from 'react'
import { Image } from 'antd'
import cs from 'classnames'
import except from '@assets/except.png'

export default function QImage (props) {
  const {
    src = 'undefnd12345.jpg',
    width = 200,
    style = {},
    className = '',
    ...item
  } = props

  // 重复工足量
  
  return (
    <div>
      <Image
        onError={onError}
        width={width}
        src={src}
        fallback={except}
        style={style}
        className={cs({[className]: className})}
        {...item}
      />
    </div>
  )
}
