import React, { useContext } from 'react'
import { Button } from 'antd'
import shortid from 'shortid'
import DraggableBox from './components/DraggableBox'
import './styles.less'

// 左侧的基础组件
export default function BasicComponents (props) {
  return (
    <div styleName="basic-components">
      <DraggableBox 
        title="大标题"
        type="T1"
        id={shortid.generate()}
      >
        大标题
      </DraggableBox>

      <DraggableBox
        title="大标题"
        type="T1"
        id={shortid.generate()}
      >
        <Button>点我</Button>
      </DraggableBox>
    </div>
  )
}
