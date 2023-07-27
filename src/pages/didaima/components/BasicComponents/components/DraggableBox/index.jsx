import { useContext, memo, useEffect } from 'react'
import { useDrag } from 'react-dnd'
import shortid from 'shortid'
import { connect } from 'dva'
import useData from '@/pages/didaima/useData'
import { Context } from '@/utils/context'
import './styles.less'

// 拖拽的组件
export default connect(state => {
  return {
    
  }
})(memo(DraggableBox))
function DraggableBox (props) {
  const { type2 } = useData()
  const { data, setData } = useContext(Context)
  const {
    children, // 拖拽的子元素
    title, // 标题
    type, // 类型
  } = props

  const [{ isDragging }, drag] = useDrag(() => ({
    type: type2,
    item: { title }, // 拖拽组件传给盒子的参数
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      if (item && dropResult) {
        console.log(JSON.stringify(data), 'data-2');
        data.push({
          id: shortid.generate(),
          type,
          title,
          top: 0,
          left: 0,
          active: true,
          zihao: 12,
        })
        setData([...data])
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
