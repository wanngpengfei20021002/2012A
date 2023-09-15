import React, { useEffect } from 'react'
import {Button, Checkbox, Table} from 'antd'
import { connect } from 'dva'
export default connect(v=>{
  return {
    resultx:v.tab.resultx
  }
})(Tab)
function Tab(props) {
  const {resultx,dispatch}=props
  console.log(resultx,'resultx');
  useEffect(()=>{
    dispatch({
      type:'tab/pushList'
    })
  },[])
  const columns = [
    {
      title: '消息名称',
      dataIndex: 'name',
    },
    {
      title: '所属公众号',
      dataIndex: 'sex',
    },
    {
      title: '发送时间',
      dataIndex: 'time',
    },
    {
      title: '接受粉丝',
      dataIndex: 'age',
    },
    {
      title: '发送状态',
      dataIndex: 'status',
    },
    {
      title: '推送账号',
      dataIndex: 'usename',
    },
    {
      title: '操作',
      render: () => 
        <>
          <Button>删除</Button>
          <Button>编辑</Button>
        </>
      ,
    },
  ];
  return (
    <div>
      <Table dataSource={resultx} columns={columns} rowKey='id' />;
    </div>
  )
}
