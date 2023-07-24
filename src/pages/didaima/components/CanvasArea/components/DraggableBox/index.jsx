import React, { useContext, useEffect, useRef, useState } from 'react'
import Moveable from 'react-moveable'
import Crop from '../Crop'
import { Context } from '@/utils/context'
import './styles.less'

export default function App (props) {
  const { data, setData } = useContext(Context)
  const { id, title, active, zihao, yanse, type, height, width } = props
  const targetRef = useRef(null);
  const targetRef2 = useRef(null);

  const onClick = evt => {
    console.log(44444);
    evt.stopPropagation()
    const dt = data.map(dt => {
      if (dt.id === id) {
        dt.active = true

      } else {
        dt.active = false
      }

      return dt
    })

    setData(dt)
  }

  function x1 () {
    console.log(height, width, 'title');
    return (
      <div
        styleName="target" 
        ref={targetRef}
        style={{
          fontSize: zihao + 'px',
          fontFamily: '方正姚体',
          color: yanse,
        }}
      >
        {/* <Crop 
          title={title} 
          height={height} 
          width={width}
        > */}
          <div ref={v => v && v.appendChild(title)} />
        {/* </Crop> */}
      </div>
    )
  }

  function x2 () {
    return (
      <div
        styleName="target" 
        ref={targetRef}
        style={{
          fontSize: zihao + 'px',
          fontFamily: '方正姚体',
          color: yanse,
        }}
      >
        {title}
      </div>
    )
  }

  function Xxx () {
    if (type === 'IMG') {
      return x1()
    }

    return x2()
  }

  const onClick2 = e => {
    e.stopPropagation()
    console.log(33333);
  }

  // useEffect(() => {
  //   const fun = () => {
  //     setData(data.map(dt => {
  //       dt.active = false
  //       return dt
  //     }))
  //   }

  //   document.addEventListener('click', fun)

  //   return () => {
  //     document.removeEventListener('click', fun)
  //   }
  // }, [data])
  
  return (
    <div onClick={onClick}>
      <Xxx />

      <Moveable
        ref={targetRef2}
        target={targetRef}
        draggable={active}
        throttleDrag={1}
        edgeDraggable={false}
        startDragRotate={0}
        throttleDragRotate={0}
        scalable={true}
        renderDirections={active ? ["nw", "ne", "sw", "se"] : []} // 设置可以拖动的点的位置
        keepRatio={false}
        throttleScale={0}
        resizable={true} // 是否可以缩放
        snappable={true}
        bounds={{"left":0,"top":0,"right":0,"bottom":0,"position":"css"}}
        onDrag={e => {
          e.target.style.transform = e.transform;
        }}
        onResize={e => {
          e.target.style.width = `${e.width}px`;
          e.target.style.height = `${e.height}px`;
          e.target.style.transform = e.drag.transform;
        }}
        onBound={e => {
          console.log(e);
        }}
      />
    </div>
  );
}
