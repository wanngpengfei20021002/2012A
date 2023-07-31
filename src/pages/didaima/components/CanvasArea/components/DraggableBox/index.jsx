import React, { useContext, useEffect, useRef, useState } from 'react'
import Moveable from 'react-moveable'
import { connect } from 'dva'
import { Context } from '@/utils/context'
import './styles.less'

export default connect(state => {
  return {}
})(App)
function App (props) {
  const { data, setData, setId } = useContext(Context)
  const { id, title, active, zihao, yanse, type, height, width, dispatch } = props
  const targetRef = useRef(null);
  const ref = useRef(null);

  useEffect(() => {
    data.find(dt => {
      if (dt.id === id) {
        ref.current.updateRect()
      }
    })
  }, [data])

  const onClick = evt => {
    evt.stopPropagation()
    const dt = data.map(dt => {
      if (dt.id === id) {
        dt.active = true
        // 重新选择图片后 保存新的 id
        setId(id)

        // 重新保存当前的图片
        dispatch({
          type: 'QUpload/setUrl',
          payload: dt.title.src
        })

      } else {
        dt.active = false
      }

      return dt
    })

    setData(dt)
  }

  function x1 () {
    return (
      <div
        styleName="target" 
        ref={targetRef}
        style={{
          fontSize: zihao + 'px',
          fontFamily: '方正姚体',
          background: yanse,
          // width,
          // height,
        }}
      >
        <div ref={v => v && v.appendChild(title)} />
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
          background: yanse,
          // width: width + 'px',
          // height: height + 'px',
        }}
      >
        {title}
      </div>
    )
  }

  function abc () {
    if (type === 'IMG') {
      return x1()
    }

    return x2()
  }

  return (
    <div onClick={onClick}>
      {abc()}

      <Moveable
        ref={ref}
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
