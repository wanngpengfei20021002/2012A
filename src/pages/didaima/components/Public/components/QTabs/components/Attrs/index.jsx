import React, { useContext, useState } from 'react'
import { Form, Input, Select, Space, Slider, Radio, Button } from 'antd'
import { SketchPicker } from 'react-color'
import { Context } from '@/utils/context'
import { QIcon } from '@@@'

const { Option } = Select
const { TextArea } = Input

export default function Attrs(props) {
  const { 
    data, 
    setData,
    setOpen, // 裁切弹窗组件的 open 
  } = useContext(Context)
  const [color, setColor] = useState({ background: '#fff' }) // 颜色

  const [form] = Form.useForm()

  // 表单数据修改 实时监听
  const onValuesChange = opt => {
    setData(data.map(dt => {
      if (dt.active) {
        if (Object.keys(opt)[0] === 'yanse') {
          return { ...dt, yanse: opt.yanse.hex }
        }
        return { ...dt, ...opt }
      }
      return dt
    }))
  }

  const handleChangeComplete = color => {
    setColor({ background: color.hex })
  }

  // 裁切按钮
  const onClick = () => {
    setOpen(true)
  }

  return (
    <Form
      labelCol={{span: 4}}
      wrapperCol={{span: 17}}
      form={form}
      onValuesChange={onValuesChange}
    >
      <Form.Item>
        <Button onClick={onClick}>裁切</Button>
      </Form.Item>

      <Form.Item
        label="文本"
        name="title"
      >
        <TextArea />
      </Form.Item>

      <Form.Item
        label="字号"
        name="zihao"
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="宽度"
        name="width"
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="高度"
        name="height"
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="字体"
        name="ziti"
      >
        <Select>
          <Option value="华文细黑">华文细黑</Option>
          <Option value="方正姚体">方正姚体</Option>
          <Option value="Times New Roman">Times New Roman</Option>
        </Select>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 4,
          span: 17,
        }}
      >
        <Space>
          <QIcon type="dingbu" />
          <QIcon type="zhaopinqiuzhi" />
          <QIcon type="a-check-circle-outlined2x" />
        </Space>
      </Form.Item>

      <Form.Item
        label="行高"
        name="hanggao"
      >
        <Slider />
      </Form.Item>

      <Form.Item
        name="duiqi"
        label="对齐"
      >
        <Radio.Group>
          <Radio.Button value="a">item 1</Radio.Button>
          <Radio.Button value="b">item 2</Radio.Button>
          <Radio.Button value="c">item 3</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        label="字体颜色"
        name="yanse"
      >
        <SketchPicker 
          color={color.background}
          onChangeComplete={handleChangeComplete}
        />
      </Form.Item>
    </Form>
  )
}