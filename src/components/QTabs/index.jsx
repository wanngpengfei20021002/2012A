import React, { useState, Fragment } from 'react'
import { Tabs, Table, Row, Col } from 'antd'
import './styles.less'

export default function QTabs (props) {
  const {
    activeKey = 1,
    data = [],
  } = props

  const [active, setActive] = useState(activeKey)

  const onChange = key => {
    setActive(key)
  }

  const fn = () => {
    return data.map(dt => ({
      key: String(dt.id),
      label: dt.title,
      children: dt.children,
    }))
  }
  
  const x1 = () => {
    const { tabBarExtraContent } = data.find(dt => dt.id === Number(activeKey))
    return tabBarExtraContent.map((dt, index) => {
      return <Col span={12} key={index}>{dt}</Col>
    })
  }

  return (
    <div className="common-qtabs">
      <Tabs 
        activeKey={String(active)} 
        items={fn()} 
        onChange={onChange}
        tabBarExtraContent={
          <Row style={{display: 'flex'}}>{x1()}</Row>
        }
      />
    </div>
  )
}


