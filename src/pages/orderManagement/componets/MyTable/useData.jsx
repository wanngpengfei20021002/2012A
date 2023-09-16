import React, { useState } from 'react'
import { connect } from 'dva'
import { QButton } from '@@@'

export default
function useData (props) {
  const { dispatch } = props

  const onClick = () => {
    dispatch({
      type: 'mytable/fetch',
      payload: {
        page: 1,
        limit: 1,
        token: 'Z3nwePrZR57jyjomjGNG896HWf4kRiBj',
      }
    })
  }

  // 按钮的数据
  const bt = [
    { title: '按钮1' },
    { title: '按钮2' },
  ]

  // 表格的数据
  const data = [
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

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address2',
    },
    {
      title: '功能',
      render: () => {
        return (
          <QButton 
            data={bt}
            onClick={onClick}
          />
        )
      }
    },
  ]

  return {
    data,
    columns,
  }
}
