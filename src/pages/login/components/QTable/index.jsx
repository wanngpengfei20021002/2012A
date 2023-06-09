import React, { useContext, useEffect, useState } from 'react'
import { Table, Button, Form, Input } from 'antd'
import is from 'is_js'
import { ThemeContext } from '../../context'

export default function QTable (props) {
  const [form] = Form.useForm()

  const {
    data = [], // 表格数据
    setData,
    result,
  } = useContext(ThemeContext)

  useEffect(() => {
    if (is.empty(result)) return false

    const yy = data.reduce((dt, { id, name, age, address }) => {
      dt[`name${id}`] = name
      dt[`age${id}`] = age
      dt[`address${id}`] = address
      return dt
    }, {})
    form.setFieldsValue(yy)
  }, [result])

  // 删除表单
  const onDelete = () => {

  }

  const onInput = (evt, id, opt) => {
    form.validateFields()
    // 实时保存修改的数据
    setData(data.reduce((dt, value) => {
      if (value.id === id) {
        value[opt] = evt.target.value
      }
      dt.push(value)
      return dt
    }, []))
  }

  // 返回 Input
  const getInput = (opt, id, text) => {
    return (
      <Form.Item
        name={`${opt}${id}`}
        rules={[{required: true, message: '必填!'}]}
      >
        <Input 
          onBlur={evt => onInput(evt, id, opt)}
        />
      </Form.Item>
    )
  }

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      render: (text, opt) => {
        return getInput('name', opt.id, text)
      }
    },
    {
      title: '年龄',
      dataIndex: 'age',
      render: (text, opt) => {
        return getInput('age', opt.id)
      }
    },
    {
      title: '住址',
      dataIndex: 'address',
      render: (text, opt) => {
        return getInput('address', opt.id)
      }
    },
    {
      title: '操作',
      render: () => {
        return (
          <Button 
            type="link" 
            onClick={onDelete}
          >
            删除
          </Button>
        )
      }
    },
  ]

  return (
    <Form
      form={form}
      labelCol={{span: 6}}
      wrapperCol={{span: 18}}
    >
      <Table 
        dataSource={data} 
        columns={columns}
        rowKey="id"
      />
    </Form>
  )
}