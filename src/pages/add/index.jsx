import React, { useEffect, useState } from 'react'
import { connect } from 'dva'
import UploadFun from './Components/UploadFun'
import { Form, Select, Checkbox, Radio, Button, Image, Input, Switch, Tabs, Row, Col, } from 'antd'
export default connect(state => {
    return {
        loading: state.loading.effects["add/addFun"]
    }
})(Add)
function Add(props) {
    const { dispatch, loading } = props
    const { Option } = Select;
    const [form] = Form.useForm()
    const [flag, setFlag] = useState(false)
    const [valu, setValu] = useState([])
    const [off, setOff] = useState("")
    const [na, setNa] = useState("")
    const [Rech, setRech] = useState(0)
    const [sett, setSett] = useState(0)
    const onChange = (key) => {
        console.log(key);
    };
    useEffect(() => {
        let value = JSON.parse(localStorage.getItem("list"))
        if (value) {
            console.log(value);
            setValu(value)
            setOff(value.official)
            setNa(value.name)
            form.setFieldsValue(value)
        }
    }, [])
    const onFinish = (val) => {
        console.log(val);
        if (valu) {
            dispatch({ type: "add/addFun", payload: { info: { ...val, id: valu.id } } })
        } else {
            dispatch({ type: "add/addFun", payload: { info: val } })
        }
        localStorage.removeItem("list")
    }
    const officialFun = (value) => {
        console.log(value);
        setOff(value)
        if (value === "支付宝公众号") {
            setOff("")
            setNa("")
        }
    }
    const nameFun = (value) => {
        console.log(value);
        setNa(value)
    }
    const RechargeFun = (e) => {
        let val = e.target.value
        console.log(val);
        setRech(val)
    }
    const settlementFun = (e) => {
        let val = e.target.value
        console.log(val);
        setSett(val)
        if (Rech > sett) {
            console.log(1);
            setFlag(true)
        } else {
            console.log(2);
            setFlag(false)
        }
    }
    const clear = () => {
        form.resetFields()
    }
    // const s = (checked) => {
    //     console.log(` ${checked}`);
    // };
    // const items = [
    //     {
    //         key: '1',
    //         label: '表单1',
    //         children: [1],
    //     },
    //     {
    //         key: '2',
    //         label: '表单2',
    //         children: [2],
    //     },
    //     {
    //         key: '3',
    //         label: '表单3',
    //         children: [3],
    //     },
    // ];
    return (
        <div>
            <Form form={form} onFinish={onFinish}>
                <Tabs defaultActiveKey="1" items={[
                    {
                        key: '1',
                        label: '表单1',
                        children: [<>
                            {/* 公众号列表 */}
                            < Form.Item name="official" label="公众号" >
                                <Select onChange={(value) => { officialFun(value) }}>
                                    <Option value="微信公众号">微信公众号</Option>
                                    <Option value="淘宝公众号">淘宝公众号</Option>
                                    <Option value="抖音公众号">抖音公众号</Option>
                                </Select>
                            </Form.Item>
                            {/* 用户名列表 */}
                            {
                                // 先判断公众号是否选择并且是否为支付宝公众号
                                off === "" || off === "微信公众号" ? [] : <Form.Item name="name" label="用户名" rules={[
                                    {
                                        required: true,
                                        message: 'Please select your country!',
                                    },
                                ]}>
                                    <Select onChange={(value) => { nameFun(value) }}>
                                        {/* 公众号为小程序公众号 */}
                                        {
                                            off === "淘宝公众号" ?
                                                <><Option value="小白">小白</Option><Option value="小花">小花</Option></>
                                                : <Option value="小蓝">小蓝</Option>
                                        }
                                    </Select>
                                </Form.Item>
                            }
                            {/* 用户昵称列表 */}
                            {
                                na === "" || na === "小白" || off === "抖音公众号" || (off === "微信公众号" && na === "小花") || (off === "小程序公众号" && na === "小蓝") ? [] : <Form.Item label="用户昵称" name="nickname" >
                                    {/* 用户名为小花 */}
                                    <Select >
                                        {
                                            na === "小花" && off === "小程序公众号" ?
                                                <><Option value="aa">aa</Option><Option value="bb">bb</Option></>
                                                : <><Option value="cc">cc</Option><Option value="dd">dd</Option></>
                                        }
                                    </Select>
                                    {/* 用户名为小蓝 */}
                                </Form.Item>
                            }


                            {/* 总充值金额 */}
                            <Form.Item name="Recharge" label="总充值金额" >
                                <Input onBlur={(e) => { (RechargeFun(e)) }} />
                            </Form.Item>
                            {/* 总结算金额 */}
                            <Form.Item name="settlement" label="总结算金额">
                                <Input onBlur={(e) => { (settlementFun(e)) }} />
                            </Form.Item></>],
                    },
                    {
                        key: '2',
                        label: '表单2',
                        children: [<>
                            <Form.Item name="schedule" label="进度" >
                                <Select >
                                    <Option value="进行中">进行中</Option>
                                    <Option value="已完成">已完成</Option>
                                </Select>
                            </Form.Item>
                            {/* 打款金额 */}
                            <Form.Item name="Payment" label="打款金额" >
                                <Input />
                            </Form.Item>
                            {/* 图片上传 */}
                            <Form.Item name="img" label="图片上传" >
                                <UploadFun />
                            </Form.Item>
                            {/* 图片上传 */}
                            <Form.Item name="img" label="图片上传2" >
                                <UploadFun />
                            </Form.Item>
                        </>],
                    },
                    {
                        key: '3',
                        label: '表单3',
                        children: [<>  {/* 渠道 */}
                            <Form.Item name="number" label="操作账号" >
                                <Checkbox.Group>
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

                            {/* 操作账号 */}
                            <Form.Item name="qudao" label="渠道" >
                                <Select>
                                    <Option value="QQ">QQ</Option>
                                    <Option value="微信">微信</Option>
                                </Select>
                            </Form.Item>
                        </>],
                    },
                ]} />





                <Form.Item>
                    <Button loading={loading} type="primary" htmlType="submit">添加</Button>
                    <Button loading={loading} onClick={clear}>清空</Button>
                </Form.Item>


            </Form>
        </div>
    )
}
