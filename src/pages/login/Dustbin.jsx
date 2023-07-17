import { useDrop } from 'react-dnd'
import { ItemTypes } from './ItemTypes'
const style = {
  height: '12rem',
  width: '12rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  color: 'white',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  float: 'left',
}
export const Dustbin = () => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.BOX, // 可以放哪些拖拽的元素
    drop: (item, monitor) => {
      return item
    },
    collect: (monitor) => {
      return {
        // drag source 是否悬停在 drop target 区域。
        // 可以选择传递{ shallow: true }以严格检查是否只有 drag source 悬停，而不是嵌套目标
        isOver: monitor.isOver(),
        // 是否可以被放置。如果正在进行拖动操作，则返回true
        canDrop: monitor.canDrop(),
      }
    },
  }))

  // 真正的拖到里面了
  const isActive = canDrop && isOver

  let backgroundColor = '#222'

  if (isActive) {
    backgroundColor = '#F99'

  } else if (canDrop) {
    backgroundColor = '#9F9'
  }

  return (
    <div 
      ref={drop} 
      style={{ ...style, backgroundColor }} 
      data-testid="dustbin"
    >
      {isActive ? 'Release to drop' : 'Drag a box here'}
    </div>
  )
}
