import React, { useState, useEffect, useRef, useCallback, useMemo, memo, useContext, createRef } from 'react'
import { Button, Checkbox, Form, Input, DatePicker, Upload } from 'antd';
// import moment from "moment"
// const { RangePicker } = DatePicker
import shortid from "shortid"
import { ListConsumer } from 'antd/lib/list'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { connect } from 'dva'
export default connect(state => {
    return {
        loading: !!state.loading.effects["upun/uploadFun"]
    }
})(Day1)
function Day1(props) {
    const [list, setlist] = useState([])
    const { dispatch, loading } = props
    const [form] = Form.useForm()
    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    );
    const beforeUpload = async file => {
        const { type, size } = file
        if (type !== 'image/jpeg') {
            return false
        }
        if (size > 100 * 1024 * 1024) {
            return false
        }
        const formDate = new FormData()
        formDate.append('file', file)

        const url = await dispatch({
            type: "upun/uploadFun",
            payload: formDate
        })
        list.push({
            uid: shortid.generate(),
            name: 'image.png',
            status: 'done',
            url

        })
        setlist([...ListConsumer])
        return false
    };

    return (
        <Form form={form}>
            <Form.Item
                name="upload"
                label="upload"
            >
                <Upload
                    name="logo"
                    listType="picture-card"
                    fileList={list}

                    beforeUpload={beforeUpload}
                >
                    {uploadButton}
                </Upload>
            </Form.Item>
        </Form>
    )


    //     const onFinish = (values) => {
    //         // console.log('Success:', values);
    //     };
    // const [form] = Form.useForm()
    //     useEffect(() => {
    //         console.log(form, "form");
    //     }, [])
    //     const onClick = () => {
    //         const { time } = form.getFieldsValue()
    //         console.log(new Date(time).getTime(), 111);
    //     };
    //     const onClick2 = () => {
    //         form.setFieldsValue({
    //             time: moment(1683787336442),
    //             time2: [moment(1683787336442), moment(16993787336442)]
    //         })
    //     };
    //     const onClick3 = async () => {
    //         await form.validateFields(['time2'])
    //         console.log("提交");
    //     };
    //     return (
    //         <div>
    //             <Form
    //                 form={form}
    //                 onFinish={onFinish}
    //             >
    //                 <Form.Item
    //                     label="日期"
    //                     name="time"
    //                     rules={[
    //                         {
    //                             required: true,
    //                             message: 'Please input your username!',
    //                         },
    //                     ]}
    //                 >
    //                     <DatePicker
    //                         showTime
    //                         format="YYYY-MM-DD HH:mm:ss"
    //                         picker="month"
    //                     />
    //                 </Form.Item>

    //                 <Form.Item
    //                     label="日期2"
    //                     name="time2"
    //                     rules={[
    //                         {
    //                             required: true,
    //                             message: 'Please input your password!',
    //                         },
    //                     ]}
    //                 >
    //                     <RangePicker />
    //                 </Form.Item>
    //             </Form>
    //             <button onClick={onClick}>点我</button>
    //             <button onClick={onClick2}>回填</button>
    //             <button onClick={onClick3}>表单验证</button>
    //         </div>
    //     )

}

