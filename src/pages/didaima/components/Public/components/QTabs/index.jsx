import React from 'react'
import { Tabs } from 'antd'
import Attrs from './components/Attrs'
import './styles.less'

// 配置组件
export default function QTabs () {
  const items = [
    {
      key: '1',
      label: `属性设置`,
      children: <Attrs />
    },
    {
      key: '2',
      label: `图层设置`,
      children: `Content of Tab Pane 2`,
    },
    {
      key: '3',
      label: `页面设置`,
      children: `Content of Tab Pane 3`,
    },
  ];
  

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <Tabs 
      defaultActiveKey="1" 
      items={items} 
      onChange={onChange} 
    />
  )
}
