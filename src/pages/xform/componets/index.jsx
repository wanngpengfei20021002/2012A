import React from 'react'
import { Steps } from 'antd';

export default function QSteps (props) {
  const { current } = props

  return (
      <Steps
        current={current}
        items={[
          {
            title: '第一步',
          },
          {
            title: '第二步',
          },
          {
            title: '第三步',
          },
        ]}
      />
  )
}
