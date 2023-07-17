import { useDrag } from 'react-dnd'
import { ItemTypes } from './ItemTypes'

const style = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left',
}
export const Box = function Box({ name, xxx }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BOX,
    // 带过来的一些数据
    item: { name, xxx },
    // 拖拽完成触发
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      if (item && dropResult) {
        console.log(item.name, 1)
        console.log(dropResult, 'dropResult');
      }
    },
    collect: (monitor) => {
      return {
        isDragging: monitor.isDragging(),
      }
    },
  }))
  const opacity = isDragging ? 0.4 : 1
  return (
    <div 
      ref={drag} 
      style={{ ...style, opacity }} 
    >
      {name}
    </div>
  )
}
