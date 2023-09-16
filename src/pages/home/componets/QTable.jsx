import React, { useEffect, useState } from 'react'
import { connect } from 'dva'
import { Table, Button } from 'antd'

export default connect(({ home, loading }) => {
  return {
    data: home.data,
    count: home.count,
    sum: home.sum,
    loading: !!loading.effects['home/fetch'],
  }
})(QTable)
function QTable (props) {
  const { dispatch, data, count, sum, loading } = props

  const setPage = (page = 1) => {
    dispatch({
      type: 'home/fetch',
      payload: {
        limit: 2,
        page,
      }
    })
  }

  useEffect(setPage, [])

  const columns = [
    {
      title: '公众号',
      dataIndex: 'gzh',
      width: 200,
    },
    {
      title: '发送时间',
      dataIndex: 'time',
      width: 200,
    },
    {
      title: '发送状态',
      dataIndex: 'state',
      width: 200,
      render: text => {
        return text ? '启动' : '关闭'
      }
    },
    {
      title: '操作账号',
      width: 200,
      dataIndex: 'zhanghao',
    },
    {
      title: '操作',
      fixed: 'right',
      width: 200,
      render: text => {
        return (
          <>
            <Button type="link">编辑</Button>
            <Button type="link">删除</Button>
          </>
        )
      }
    },
  ]

  const rowSelection = {
    onChange: (opt, row) => {
      dispatch({
        type: 'home/setSum',
        payload: row.length
      })
    },
  }

  const onChange = page => setPage(page)

  return (
    <div>
      <Table 
        dataSource={data} 
        columns={columns} 
        loading={loading}
        rowKey="id"
        // scroll={{
        //   x: 1300,
        // }}
        rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }}
        pagination={{
          total: count,
          pageSize: 2,
          onChange,
        }}
      />

      {sum}
    </div>
  )
}


