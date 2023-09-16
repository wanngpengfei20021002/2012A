import { useCallback, useState } from 'react'
import { useDrop } from 'react-dnd'
import { DraggableBox } from './DraggableBox'
import { ItemTypes } from './ItemTypes'

const styles = {
  width: 300,
  height: 300,
  border: '5px solid #F00',
  position: 'relative',
}
export const Container = props => {
  const [boxes, setBoxes] = useState({
    a: { top: 0, left: 0, title: '正文内容' },
    b: { top: 180, left: 20, title: 'Drag me too' },
    c: { top: 50, left: 20, title: '小花' },
  })
  const moveBox = useCallback((id, left, top) => {
    boxes[id].top = top
    boxes[id].left = left
    // boxes['d'] = { ...boxes[id] }
    // boxes['d'].top = top
    // boxes['d'].left = left
    setBoxes({ ...boxes })
  }, [boxes])

  const [, drop] = useDrop(() => ({
      accept: ItemTypes.BOX,
      drop(item, monitor) {
        // 返回 x, y 位置
        const delta = monitor.getDifferenceFromInitialOffset()
        let left = Math.round(item.left + delta.x)
        let top = Math.round(item.top + delta.y)
        moveBox(item.id, left, top)
        return undefined
      },
    }), [moveBox])

  return (
    <div ref={drop} style={styles}>
      {Object.keys(boxes).map((key) => (
        <DraggableBox key={key} id={key} {...boxes[key]} />
      ))}
    </div>
  )
}
