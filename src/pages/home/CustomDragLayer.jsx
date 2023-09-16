import { useDragLayer } from 'react-dnd'
import { BoxDragPreview } from './BoxDragPreview'
import { ItemTypes } from './ItemTypes'

const layerStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  zIndex: 100,
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
}
function getItemStyles(initialOffset, currentOffset) {
  if (!initialOffset || !currentOffset) {
    return {
      display: 'none',
    }
  }
  let { x, y } = currentOffset
  
  const transform = `translate(${x}px, ${y}px)`
  return {
    transform,
  }
}

export const CustomDragLayer = (props) => {
  const { itemType, isDragging, item, initialOffset, currentOffset } =
    useDragLayer((monitor) => ({
      // 返回表示当前拖动项目的普通对象
      item: monitor.getItem(),
      // 返回标识当前拖动项类型的字符串或符
      itemType: monitor.getItemType(),
      // x, y 位置
      initialOffset: monitor.getInitialSourceClientOffset(),
      currentOffset: monitor.getSourceClientOffset(),
      isDragging: monitor.isDragging(),
    }))

  function renderItem() {
    switch (itemType) {
      case ItemTypes.BOX:
        return <BoxDragPreview title={item.title} />
      default:
        return null
    }
  }
  if (!isDragging) {
    return null
  }
  return (
    <div style={layerStyles}>
      <div
        style={getItemStyles(initialOffset, currentOffset)}
      >
        {renderItem()}
      </div>
    </div>
  )
}
