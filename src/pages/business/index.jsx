import React, { useCallback, useEffect, useState } from 'react'
import { connect } from 'dva'
import { Table, Button } from 'antd'
import useData from './useData'
import './styles.less'

const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
]

export default connect(({ }) => {
  return {
    
  }
})(Business)
function Business (props) {
  const { dispatch } = props
  const columns = useData({
    a: 1,
    b: 2,
    dispatch,
  })

  return (
    <div>
      <Table 
        dataSource={dataSource} 
        columns={columns} 
        rowKey="key"
      />
    </div>
  )
}


