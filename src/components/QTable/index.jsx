import React from 'react'
import { Table } from 'antd'
import cs from 'classnames'

export default function QTable (props) {
  const {
    columns = [],
    data = [],
  } = props

  const onChange = () => {
    
  }

  return (
    <div>
      <Table 
        dataSource={data} 
        columns={columns}
        pagination={{
          // pageSize: 1,
          // total: 50,
          onChange,
        }}
      />
    </div>
  )
}
