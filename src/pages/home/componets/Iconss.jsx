import React, { useEffect, useRef, Fragment, useState } from 'react'
import { Button, Image } from 'antd-mobile'
import cs from 'classnames'
import img from '@assets/headPortrait.png'
import './styles.less'

export default function Iconss (props) {
  const { onImage } = props
  const [flag, setFlag] = useState(true)

  const onClick = () => {
    console.log(1111);
    setFlag(!flag)
  }

  const onClick2 = opt => {
    onImage(opt)
  }

  return (
    <div style={{height: 120}}>
      <Button onClick={onClick}>Icon</Button>

      <ul styleName={cs({xxx: flag})}>
        <li onClick={() => onClick2(img)}><Image src={img} width={50} /></li>
        <li><Image src={img} width={50} /></li>
        <li><Image src={img} width={50} /></li>
      </ul>
    </div>
  )
}
