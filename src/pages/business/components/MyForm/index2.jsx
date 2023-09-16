import React, { useCallback, useEffect, useState } from 'react'
import shortid from 'shortid'
import { Form, Input, Button } from 'antd-mobile'
import './styles.less'

export default function Index2 (props) {
  const { data, setData } = props
  const [form] = Form.useForm()
 
  const onFinish = value => {
    console.log(value, 'vaul');
  }

  const onAdd = () => {
    data.push({
      id: shortid.generate(),
      user: '姓名',
      shenfen: '身份证',
      value1: '',
      value2: '',
    })

    setData([...data])
  }

  const onChange = (evt, opt, key) => {
    const { id } = opt
    const obj = data.find(dt => dt.id === id)
    obj[key] = evt
    console.log(data, 'data');
    setData([...data])
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
      {
        data.map((dt, index) => {
          return (
            <div key={dt.id} styleName="box">
              <p styleName="shanchu">删除</p>
              <div styleName="x1">
                <Form.Item
                  name={`name${index}`}
                  label='姓名'
                  rules={[{ required: true, message: '姓名不能为空' }]}
                >
                  <Input
                    placeholder='请输入姓名' 
                    className="xxx"
                    onChange={evt => onChange(evt, dt, 'value1')}
                  />
                </Form.Item>

                <Form.Item name={`address${index}`} label='地址'>
                  <Input 
                    placeholder='请输入地址' 
                    onChange={evt => onChange(evt, dt, 'value2')}
                  />
                </Form.Item>
              </div>
            </div>
          )
        })
      }
      <p onClick={onAdd}>添加</p>
    </Form>
  )
}