import React, { useState, useContext, useCallback, useRef } from 'react'
import { useDrop } from 'react-dnd'
import { Context } from '@/utils/context'
import DraggableBox from './components/DraggableBox'
import useData from '@/pages/didaima/useData'
import './styles.less'

export default function CanvasArea(props) {
  // 拖拽的类型
  const { type2 } = useData()
  const { data, setData } = useContext(Context)
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: type2, // 可以放哪些拖拽的元素
    // item: 拖拽的当前的元素的数据
    // drop: 拖拽元素拖拽结束触发
    drop: (item, monitor) => {
 
    },
    collect: (monitor) => {
      return {
        // drag source 是否悬停在 drop target 区域。
        // 可以选择传递 { shallow: true } 以严格检查是否只有 drag source 悬停 而不是嵌套目标
        isOver: monitor.isOver(),
        // 是否可以被放置 如果正在进行拖动操作 则返回true
        canDrop: monitor.canDrop(),
      }
    },
  }))

  // 真正的拖到里面了
  const isActive = canDrop && isOver

  let backgroundColor = '#FFF'

  if (isActive) {
    backgroundColor = '#F99'

  } else if (canDrop) {
    backgroundColor = '#9F9'
  }

  const fun = () => {
    // 循环清空所有数据的 active
    setData(data.map(dt => {
      dt.active = false
      return dt
    }))
  }

  return (
    <div
      data-testid="dustbin"
      styleName="canvas-area"
      onClick={fun}
    >
      <div
        ref={drop}
        styleName="box"
        style={{
          backgroundColor,
          position: 'relative',
          border: '5px #000 solid'
        }}
      >
        {
          data.map(dt => {
            return <DraggableBox {...dt} key={dt.id} />
          })
        }
      </div>
    </div>
  )
}
