import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Image, List, Modal, Form, Select, Checkbox, Row, Col, } from 'antd';
import React, { useEffect, useState } from 'react';
// import CardsFun from './Components/CardsFun';
import { connect } from 'dva'
const { Meta } = Card;
export default connect(state => {
    return {
        data: state.card.data,
        count: state.card.count,
        loading: !!state.loading.effects["card/listFun"]
    }
})(Cards)
function Cards(props) {
    const { dispatch, data, count, loading } = props
    useEffect(() => {
        list()
    }, [])
    const list = (page) => {
        dispatch({ type: "card/listFun", payload: { limit: 3, page: page } })
    }
    //修改状态
    const flagFun = (val) => {
        let va = val.flag
        val.flag = !va
        dispatch({ type: "card/addFun", payload: { info: { ...val, id: val.id } } })
    }
    const detils = (id) => {
        // console.log(id);
        window.location.href = "/xq/" + id
    }

    const bj = (val) => {
        console.log(val);
        localStorage.setItem("list", JSON.stringify(val))
        window.location.href = "/add"
    }
    return (
        <div>
            <List
                rowKey="id"
                pagination={{
                    total: count,
                    pageSize: 3,
                    onChange: (page, pageSize) => {
                        list(page)
                    }
                }}
                grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 4,
                    lg: 4,
                    xl: 6,
                    xxl: 3,
                }}
                dataSource={data}
                renderItem={(item) => (

                    <List.Item
                    >
                        <Card
                            loading={loading}
                            style={{
                                width: 200,
                                // background: "red"
                            }}
                            cover={
                                <img
                                    alt="example"
                                    src={item.img}
                                />
                            }
                            actions={[
                                <Button onClick={() => { bj(item) }}>编辑</Button>,
                                <Button onClick={() => { flagFun(item) }}>{item.flag ? "收藏" : "未收藏"}</Button>,
                                <Button onClick={() => { detils(item.id) }}>详情</Button>,
                            ]}
                        >
                            <Meta
                                title={
                                    <div>
                                        <p>渠道:{item.qudao}</p>
                                        <p>公众号:{item.official}</p>
                                        <p>操作账号:{item.number}</p>
                                    </div>
                                }
                            />
                        </Card>
                    </List.Item>
                )}
            />
            <Button onClick={() => {
                window.location.href = "/add"

            }}>添加</Button>

        </div>
    )
}
