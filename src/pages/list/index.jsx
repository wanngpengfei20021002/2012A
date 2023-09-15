import React, { useEffect, useState } from 'react'
import { Table, Button, Switch, Modal } from 'antd';
import { connect } from 'dva'
export default connect(state => {
    return {
        data: state.list.data,
        count: state.list.count,
        loading: !!state.loading.effects["list/listFun"]
    }
})(List)
function List(props) {
    const [leng, setLeng] = useState(0)
    const [token, setToken] = useState(JSON.parse(localStorage.getItem("list")))
    const { dispatch, loading, data, count } = props
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            setLeng(selectedRows.length)
        },
        getCheckboxProps: (record) => ({
            disabled: record.name === 'Disabled User',
            // Column configuration not to be checked
            name: record.name,
        }),
    };
    const flagFun = (v, i) => {
        console.log(v, i);
        i.flag = !v
        dispatch({ type: "list/addFun", payload: { info: { ...i, id: i.id } } })
    }


    const confirms = (id) => {
        Modal.confirm({
            title: "删除",
            onOk() {
                dispatch({ type: "list/delFun", payload: { id: id } })
            },
            onCancel() { },
        })

    }
    const columns = [
        {
            title: '公众号',
            dataIndex: 'official',
        },
        {
            title: '消息名称',
            dataIndex: 'name',
        },
        {
            title: '操作账号',
            dataIndex: 'Recharge',
        },
        {
            title: '操作规范',
            dataIndex: 'Payment',
        },
        {
            title: '状态',
            dataIndex: 'flag',
            render: (_, item) => {
                return (
                    <Switch key={item.id} checked={item.flag} onChange={() => { flagFun(_, item) }} />
                )
            }
        },

        {
            title: '操作',
            fixed: 'right',
            render: (_, item) => {
                return (
                    <p key={item.id}>
                        <Button onClick={() => { bj(item) }}>编辑 </Button>
                        {/* <Button onClick={() => { detils(item.id) }}> 详情  </Button> */}
                        <Button onClick={() => { confirms(item.id) }}> 删除  </Button>
                    </p>
                )
            }
        },
    ];
    // const detils = (id) => {
    //     console.log(id);
    //     window.location.href = "/xq/" + id
    // }
    const add = () => {
        window.location.href = "/add"
    }
    const add1 = () => {
        window.location.href = "/cars"
    }
    useEffect(() => {
        list()
    }, [])
    const list = (page) => {
        dispatch({ type: "list/listFun", payload: { limit: 3, page: page, token: token } })
    }
    //编辑
    const bj = (val) => {
        console.log(val);
        localStorage.setItem("list", JSON.stringify(val))
        window.location.href = "/add"
    }
    return (
        <div style={{ background: "white", width: "100%", height: "100%", borderRadius: "10px" }}>
            <Table
                rowKey="id"
                loading={loading}
                rowSelection={{
                    ...rowSelection,
                }}
                scroll={{
                    x: 1300,
                }}
                columns={columns}
                rowKey="id"
                dataSource={data}
                pagination={{
                    total: count,
                    pageSize: 3,
                    onChange: (page, pageSize) => {
                        list(page)
                    }
                }}
            />  <Button onClick={add}>新增</Button><Button onClick={add1}>切换成表格</Button>
            {leng}条
        </div>
    )
}