import React, { useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Context } from '@/utils/context'
import BasicComponents from './components/BasicComponents'
import CanvasArea from './components/CanvasArea'
import Public from './components/Public'
import QModal from './components/QModal' // 裁切弹窗组件
import './styles.less'

export default function Didaima (props) {
  // 中间要渲染的数据
  const [data, setData] = useState([])
  const [open, setOpen] = useState()
  const [id, setId] = useState() // 上传图片的 id

  return (
    <div styleName="didaima">
      {/* 拖拽 */}
      <DndProvider backend={HTML5Backend}>
        <Context.Provider 
          value={{data, setData, setOpen, id, setId}}
        >
          {/* 基础组件 */}
          <BasicComponents />

          {/* 画布 */}
          <CanvasArea />

          {/* 配置 */}
          <Public />

          {/* 裁切弹窗 */}
          <QModal 
            open={open}
          />
        </Context.Provider>
      </DndProvider>
    </div>
  )
}
