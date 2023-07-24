import React from 'react'
import { Button } from 'antd'
import DraggableBox from './components/DraggableBox'
import QUpload from './components/QUpload'
import './styles.less'

// 左侧的基础组件
export default function BasicComponents (props) {
  return (
    <div styleName="basic-components">
      <DraggableBox 
        title="大标题"
      >
        大标题
      </DraggableBox>

      <DraggableBox
        title={<Button>点我</Button>}
      >
        <Button>点我</Button>
      </DraggableBox>

      <DraggableBox>
        <QUpload />
      </DraggableBox>
    </div>
  )
}
