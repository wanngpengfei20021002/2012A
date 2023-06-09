import React, { useContext, useEffect, useRef, useState, memo } from 'react'
import { Form, Select, Input, Button, Checkbox, Radio, Row, Col } from 'antd'
import { connect } from 'dva'
import is from 'is_js'
import { ThemeContext } from '../../context'
import './styles.less'

const { Option } = Select

export default connect(({ loading }) => {
  return {
    isload: !!loading.effects['login/fetchUpload'], // 监听上传接口
  }
})(memo(QForm))
function QForm (props) {
  const { 
    form = {},
    result = {},
  } = useContext(ThemeContext)

  // 城市
  const [city, setCity] = useState()

  // 爱好
  const [ai, setAi] = useState([])

  useEffect(() => {
    if (is.empty(result)) return false
    const { city, aihao } = result
    setCity(city) // 回填城市 
    setAi(aihao) // 回填爱好
  }, [result])

  // 切换城市
  const onCity = opt => setCity(opt)

  const jingdian = (
    <Form.Item
      name="jingdian"
      label="景点"
      rules={[{ required: true, message: '必填!' }]}
    >
      <Select
        disabled={
          // 上海 && 选中3 
          (city === '2' && ai.includes('3')) ||
          // 北京 && 选中C
          (city === '1' && ai.includes('C'))
        }
      >
        <Option value="1">西湖</Option>
        <Option value="2">故宫</Option>
        <Option value="3">欢乐谷</Option>
      </Select>
    </Form.Item>
  )

  const onCheckbox = opt => setAi(opt)

  // 切换 radio 的 爱好
  const onRadio = evt => setAi(evt.target.value)

  // Checkbox 爱好
  const aihao1 = (
    <Form.Item
      name="aihao"
      label="爱好"
      rules={[{ required: true, message: '必填!' }]}
    >
      <Checkbox.Group onChange={onCheckbox}>
        <Row>
          <Col span={8}>
            <Checkbox
              value="A"
              style={{
                lineHeight: '32px',
              }}
            >
              A
            </Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox
              value="B"
              style={{
                lineHeight: '32px',
              }}
            >
              B
            </Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox
              value="C"
              style={{
                lineHeight: '32px',
              }}
            >
              C
            </Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox
              value="D"
              style={{
                lineHeight: '32px',
              }}
            >
              D
            </Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox
              value="E"
              style={{
                lineHeight: '32px',
              }}
            >
              E
            </Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox
              value="F"
              style={{
                lineHeight: '32px',
              }}
            >
              F
            </Checkbox>
          </Col>
        </Row>
      </Checkbox.Group>
    </Form.Item>
  )

  // Radio 爱好
  const aihao2 = (
    <Form.Item
      name="aihao"
      label="爱好"
      rules={[{ required: true, message: '必填!' }]}
    >
      <Radio.Group
        onChange={onRadio}
      >
        <Radio value="1">1</Radio>
        <Radio value="2">2</Radio>
        <Radio value="3">3</Radio>
      </Radio.Group>
    </Form.Item>
  )

  const getAi = () => {
    // 选中北京
    if (city === '1') {
      return (
        <>
          {aihao1}
          {/* 城市为北京 渲染 景点 */}
          {jingdian}
        </>
      )
    }

    // 选中上海
    if (city === '2') {
      return (
        <>
          {aihao2}
          {/* 城市为上海 渲染 景点 */}
          {jingdian}
        </>
      )
    }
  }

  // componetDidMound onMounted
  // componetDidUpdate 
  // 卸载
  useEffect(() => {
    if (city === '2') {
      // 设置默认选中第一个
      form.setFieldsValue({
        aihao: '1',
      })
    }
    // 选中杭州 清空景点
    if (city === '3') {
      form.setFieldsValue({ jingdian: '' })
    }
  }, [city])

  return (
    <>
      <Form.Item
        shouldUpdate
        name="user"
        label="姓名"
        rules={[{ required: true, message: '必填!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="city"
        label="城市"
        rules={[{ required: true, message: '必填!' }]}
      >
        <Select onChange={onCity}>
          <Option value="1">北京</Option>
          <Option value="2">上海</Option>
          <Option value="3">杭州</Option>
        </Select>
      </Form.Item>

      {/* 爱好 */}
      {getAi()}

      <Form.Item shouldUpdate noStyle>
        {({ getFieldValue }) => {
          return (
            getFieldValue('jingdian') === '1' && (
              <Form.Item
                name="input"
                label="input"
                rules={[{ required: true, message: '必填!' }]}
              >
                <Input />
              </Form.Item>
            )
        )}}
      </Form.Item>
    </>
  )
}
