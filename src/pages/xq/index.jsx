import React, { useEffect, useState } from 'react'
import { connect } from 'dva'
import { Image } from 'antd'
export default connect(state => {
    return {

    }
})(Detls)
function Detls(props) {
    const { dispatch } = props
    const [data, setData] = useState([])
    useEffect(async () => {
        let id = props.match.params.id
        console.log(id);
        let data = await dispatch({ type: "xq/listFun", payload: { id: id } })
        console.log(data);
        setData(data)
    }, [])
    return (
        <div style={{ width: "100%", height: "100%", display: "flex" }}>
            <div style={{ width: "50%", height: "100%" }}>
                <Image src={data.img}></Image>
            </div>
            <div style={{ width: "50%", height: "100%" }}>
                <p style={{ margin: "10px" }}>公众号:{data.official}</p>
                <p style={{ margin: "10px" }}>用户名:{data.name}</p>
                <p style={{ margin: "10px" }}>用户昵称:{data.nickname}</p>
                <p style={{ margin: "10px" }}>总充值金额:{data.Recharge}</p>
                <p style={{ margin: "10px" }}>总结算金额:{data.settlement}</p>
                <p style={{ margin: "10px" }}>状态:{data.flag ? "收藏" : "未收藏"}</p>
                <p style={{ margin: "10px" }}>进度:{data.schedule}</p>
                <p style={{ margin: "10px" }}>打款金额:{data.Payment}</p>
            </div>
        </div>
    )
}
