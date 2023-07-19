import { useContext, memo, useEffect } from 'react'
import { useDrag } from 'react-dnd'
import useData from '@/pages/didaima/useData'
import { Context } from '@/utils/context'
import './styles.less'

// 拖拽的组件
export default memo(DraggableBox)
function DraggableBox (props) {
  const { type2 } = useData()
  const { data, setData } = useContext(Context)
  const { 
    children, // 拖拽的子元素
    title, // 标题
    type, // 类型
    id,
  } = props

  const [{ isDragging }, drag] = useDrag(() => ({
    type: type2,
    item: { title }, // 拖拽组件传给盒子的参数
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      if (item && dropResult) {
        data.push({
          id,
          type,
          title,
          top: 0,
          left: 0,
        })
        setData([...data])
        // console.log(item.name, 1)
        // console.log(dropResult, 'dropResult');
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }), [])

  const opacity = isDragging ? 0.4 : 1
  
  return (
    <div
      ref={drag}
      style={{opacity}}
    >
      {children}
    </div>
  )
}
