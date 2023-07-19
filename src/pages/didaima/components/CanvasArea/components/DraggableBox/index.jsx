import { useContext, memo, useEffect, useRef } from 'react'
import { useDrag } from 'react-dnd'
import useData from '@/pages/didaima/useData'
import { Context } from '@/utils/context'
import './styles.less'

import Moveable from "react-moveable";

// 拖拽的组件
export default memo(DraggableBox)
function DraggableBox (props) {
  const ref = useRef(null)
  const { type2 } = useData()
  const { data } = useContext(Context)
  const {
    left,
    top,
    children, // 拖拽的子元素
    title, // 标题
    id,
  } = props

  const getStyles = () => {
    const transform = `translate3d(${left}px, ${top}px, 0)`
    return {
      position: 'absolute',
      transform,
      opacity: isDragging ? 0 : 1,
      height: isDragging ? 0 : '',
    }
  }

  const [{ isDragging }, drag] = useDrag(() => ({
    type: type2,
    item: { id, left, top, title }, // 拖拽组件传给盒子的参数
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }), [data])

  const opacity = isDragging ? 0.4 : 1

  return (
    <div>
      <div
        ref={drag}
        style={{opacity, ...getStyles()}}
      >
        <div
          ref={ref}
          style={{width: 100, height: 100, border: '10px #f00 solid'}}
        >
          {children}
        </div>
      </div>

      <Moveable
        target={ref} // moveable的对象
        resizable={true} // 是否可以缩放
        keepRatio={false} // 是否可以等比缩放
        throttleResize={1} // 计算改变宽高位置的频率
        renderDirections={["nw", "ne", "sw", "se"]} // 设置可以拖动的点的位置
        origin={false} // 显示中心点
        onResize={e => {
          e.target.style.width = `${e.width}px`;
          e.target.style.height = `${e.height}px`;
        }}
      />
    </div>
    
  )
}
