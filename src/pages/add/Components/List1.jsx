import React, { useEffect, useState } from 'react'
import { connect } from 'dva'
// import UploadFun from './Components/UploadFun'
import { Form, Select, Checkbox, Radio, Button, Image, Input, Switch, Tabs, Row, Col, } from 'antd'
export default connect(state => {
    return {
        loading: !!state.loading.effects[""]
    }
})(List1)

function List1(props) {
    const { dispatch, loading } = props
    const { Option } = Select;
    const [form] = Form.useForm()
    const [valu, setValu] = useState([])
    const [off, setOff] = useState("")
    const [na, setNa] = useState("")
    const [Rech, setRech] = useState(0)
    const [sett, setSett] = useState(0)
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

    return (
        <>
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
            </Form.Item></>
    );
};

