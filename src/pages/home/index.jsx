import React, { useEffect, useState } from 'react'
import { connect } from 'dva'
import { history } from 'umi'
import { Table, Button, Form, Input } from 'antd'
import './styles.less'

export default connect(state => {
  return {
    data: state.home.data,
    count: state.home.count,
  }
})(Home)
function Home (props) {
  const { data, dispatch, count } = props

  const fun = (page = 1) => {
    dispatch({
      type: 'home/fetch',
      payload: {
        limit: 1,
        page,
      }
    })
  }
  console.log(data, 'data');
  useEffect(fun, [])

  const onEdit = id => {
    history.push(`/login/${id}`)
  }

  const onChange = page => {
    fun(page)
  }

  function xxx (opt) {
    if (typeof Number(opt) === 'number') {
      return opt
    }
    return text ? text : '--'
  }

  const columns = [
    {
      title: '景点',
      dataIndex: 'jingdian',
      width: 300,
      render: text => xxx(text)
    },
    {
      title: '操作',
      fixed: 'right',
      render: (text, opt) => {
        return (
          <Button 
            type="link" 
            onClick={() => onEdit(opt.id)}
          >
            编辑
          </Button>
        )
      }
    },
  ]

  return (
    <Table 
      dataSource={data} 
      columns={columns}
      // scroll={{
      //   x: 1200,
      // }}
      rowKey="id"
      sticky
      pagination={{
        total: count,
        pageSize: 1,
        onChange,
      }}
    />
  )
}
