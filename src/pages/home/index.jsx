import React from 'react'
import Example from './example'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import './styles.less'

// 组件: 基础组件 业务组件
export default function Home (props) {
  return (
    <div className="App">
      {/* 必须有 */}
      <DndProvider backend={HTML5Backend}>
        <Example />
      </DndProvider>
    </div>
  )
}
