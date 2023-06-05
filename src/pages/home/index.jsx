import React, { useEffect, useState } from 'react'
import { connect } from 'dva'
import { Spin, Pagination, Button, Table, Input, DatePicker, Form } from 'antd'
import shortid  from 'shortid'
import './styles.less'

export default connect(state => {
  return {
    result: state.home.data,
  }
})(Home)
function Home (props) {
  const { dispatch, result } = props
  // 数据驱动视图
  const [form] = Form.useForm();
  const [data, setData] = useState([]) // 实时表单数据

  useEffect(() => {
    dispatch({
      type: 'home/fetch',
      payload: {
        limit: 20,
        page: 1,
        token: 'qTjFb9aSIralE9Mk8nwyU9lO9tQXm2jz',
      }
    })
  }, [])

  const isValue = opt => Object.values(JSON.parse(JSON.stringify(opt))).length === 4

  // 提交表单
  const submit = () => {
    const info = data.find(dt => isValue(dt))

    // 有数据 提交接口
    if (info) {
      dispatch({
        type: 'home/fetchPut',
        payload: {
          info,
          token: 'qTjFb9aSIralE9Mk8nwyU9lO9tQXm2jz'
        }
      })
    }
  }

  const onBlur = (id, key, evt) => {
    form.validateFields()
    // 修改表单值
    data.find(dt => dt.id === id)[key] = evt.target.value
    // 提交
    submit()

    setData([...data])
  }

  const getInput = ({ id, type, key }) => {
    const xxx = {
      input: <Input onBlur={evt => onBlur(id, key, evt)} />,
      date: <DatePicker onBlur={evt => onBlur(id, 'sex', evt)} />,
    }
    return (
      <Form.Item
        name={`${key}${id}`}
        rules={[{required: true, message: '必填'}]}
      >
        {xxx[type]}
      </Form.Item>
    )
  }

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      render: (text, all) => {
        const { id } = all

        return getInput({ 
          id, 
          key: 'name',
          type: 'input',
        })
      },
    },
    {
      title: '年龄',
      dataIndex: 'age',
      render: (text, all, index) => {
        const { id } = all

        return getInput({ 
          id, 
          key: 'age',
          type: 'input',
        })
      },
    },
    {
      title: '性别',
      dataIndex: 'sex',
      render: (text, all, index) => {
        const { id } = all

        return getInput({ 
          id, 
          key: 'sex',
          type: 'date',
        })
      },
    },
  ]

  // 新增数据
  const onAdd = () => {
    data.push({
      id: shortid.generate(),
      name: undefined,
      age: undefined,
      sex: undefined,
    })
    setData([...data])
  }

  return (
    <div>
      <Button onClick={onAdd}>新增</Button>

      <Form form={form}>
        <Table
          dataSource={data}
          rowKey="id"
          columns={columns}
          onRow={(record) => {
            return {
              onDoubleClick: (event) => {
                console.log('双击了');
              },
            };
          }}
        />
      </Form>
    </div>
  )
}
