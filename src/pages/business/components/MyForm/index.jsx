import React, { useCallback, useEffect, useMemo } from 'react'
import { Form, Input, Button } from 'antd-mobile'
import { AddCircleOutline } from 'antd-mobile-icons'
import './styles.less'

export default function MyForm (props) {
  const [form] = Form.useForm()

  const onAdd = operation => {
    operation.add({ 
      name: '',
      address: '',
    })
  }

  const renderAdd = () => {
    return (
      <span>
        <AddCircleOutline /> 添加
      </span>
    )
  }

  const renderHeader = ({ index }, { remove }) => {
    return (
      <a onClick={() => remove(index)} styleName="x2">
        删除
      </a>
    )
  }

  const onFinish = value => {
    console.log(value, 'vaul');
  }

  return (
    <Form
      form={form}
      layout='horizontal'
      onFinish={onFinish}
      footer={
        <Button block type='submit' color='primary' size='large'>
          提交
        </Button>
      }
    >
      <Form.Array
        name='contacts'
        onAdd={onAdd}
        renderAdd={renderAdd}
        renderHeader={renderHeader}
      >
        {
          fields => {
            return (
              fields.map(({ index }) => (
                <div styleName="box">
                  <div styleName="shanchu">-</div>
                  <div styleName="x1">
                    <Form.Item
                      name={[index, 'name']}
                      label='姓名'
                      rules={[{ required: true, message: '姓名不能为空' }]}
                    >
                      <Input placeholder='请输入姓名' className="xxx" />
                    </Form.Item>
                    
                    <Form.Item name={[index, 'address']} label='地址'>
                      <Input placeholder='请输入地址' />
                    </Form.Item>
                  </div>
                </div>
              ))
            )
          }
        }
      </Form.Array>
    </Form>
  )
}


