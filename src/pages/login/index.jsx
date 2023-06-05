import React, { useContext, useEffect, useRef, useState } from 'react'
import { Button, Form, Input, Popconfirm, Table } from 'antd'
import shortid from 'shortid'
import './styles.less'

// dddddddddd
// 小白登录做完了
// 王亮改的代码
// 新的需求完成了
function MyForm (opt) {
  const { onBlur, id, index } = opt

  const inputBlur = evt => {
    onBlur({ 
      id, 
      index,
      value: evt.target.value,
    })
  }

  return (
    <Form.Item
      name={shortid.generate()}
      rules={[{required: true, message: '必填'}]}
    >
      <Input onBlur={inputBlur} />
    </Form.Item>
  )
}

export default function Fun () {
  const [data, setData] = useState([])

  const dt = {
    id: shortid.generate(),
    name: '',
    age: undefined,
    sex: '',
    edit: true,
  }

  const onBlur = ({ id, index, value }) => {
    console.log(id, 'id');
    console.log(index, 'index');
    console.log(value, 'value');
  }

  const isE = ({ text, opt, key, index }) => {
    const { edit } = opt

    if (edit) {
      return (
        <MyForm 
          onBlur={onBlur}
          id={key}
          opt={opt}
          index={index}
        />
      )
    }
    return text
  }

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      width: 300,
      render: (text, opt, index) => {
        return isE({
          text, 
          opt, 
          index,
          key: 'name',
        })
      },
    },
    {
      title: '年龄',
      dataIndex: 'age',
      width: 300,
      // render: (text, opt) => isE(text, opt.edit),
    },
    {
      title: '性别',
      dataIndex: 'sex',
      width: 300,
      // render: (text, opt) => isE(text, opt.edit),
    },
  ];

  const onDoubleClick = (opt, evt) => {
    const text = evt.target.innerText
    console.log(opt, 3333);
    console.log(text, 'text');
  }
  
  const onClick = () => {
    data.push(dt)
    setData([...data])
  }

  return (
    <>
      <Button onClick={onClick}>新增</Button>
      <Form>
        <Table 
          dataSource={data} 
          columns={columns}
          rowKey="id"
          onRow={record => {
            return {
              onDoubleClick: evt => onDoubleClick(record, evt)
            }
          }}
        />
      </Form>
    </>
  )
}