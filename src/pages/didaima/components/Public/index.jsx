import React from 'react'
import QTabs from './components/QTabs'
import './styles.less'

// 配置组件
export default function Public () {
  return (
    <div styleName="public">
      {/* 标签切换 */}
      <QTabs />
    </div>
  )
}
