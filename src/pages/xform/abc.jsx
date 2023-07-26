import React, { useEffect, useRef, useState } from 'react'
import html2canvas from 'html2canvas'

const url = 'https://img0.baidu.com/it/u=1604010673,2427861166&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889'

export default function XForm (props) {
  const ref = useRef()
  const [x, setX] = useState()

  const config = {
    useCORS: true,
    // x: 133,
    // y: 298,
    // width: 100,
    // height: 100,
    // proxy: url,
    // ignoreElements: (xxx) => {
    //   if (xxx.innerText === '测试') {
    //     return true
    //   }
    // }
  }

  useEffect(() => {
    // ref.current.onload = () => {
      // html2canvas(DOM节点, 配置参数)
      html2canvas(document.body, config).then(function(canvas) {
        setX(canvas.toDataURL("image/jpeg"))
        canvas.style.position = 'absolute'
        canvas.style.top = 300
        canvas.style.left = 0
     
        canvas.style.border = '2px #f00 solid'
        // document.body.appendChild(canvas);
      })
    // }
  }, [])

  return (
    <div>
      form
      <img src={url} ref={ref} />
      {x && <img src={x} style={{border: '2px #F00 solid'}} />}
    </div>
  )
}