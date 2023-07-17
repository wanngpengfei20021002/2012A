import React from 'react'
import { Table, Button } from 'antd'

export default function useData (props) {
  const { dispatch } = props 

  const onClick = () => {
    console.log(dispatch, 'dispatch');
  }

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
      dataIndex: 'address',
    },
    {
      title: '住址',
      render: (text, opt) => {
        return (
          <Button type="link" onClick={onClick}>
            删除
          </Button>
        )
      }
    },
  ]

  return columns
}