import React,{useEffect} from 'react'
import {Card,Switch,Button,Popconfirm} from 'antd'
import { connect } from 'dva'
import { history } from 'umi'
import  './styles.less'
import axios from 'axios'
import qs from 'qs'
export default connect(v=>{
  return {
    resultx:v.tablex.resultx,
    deletex:v.tablex.deletex,
  }
})(Tablex)
function Tablex(props) {
  const {resultx,dispatch,deletex}=props
  // const {search}=useLocation()
  console.log(resultx,'resultx');
  console.log(deletex,'deletex');
  useEffect(()=>{
    dispatch({
      type:'tablex/pushList'
    })
  },[])
  return (
    <div styleName='boxbtn'>
      {
        resultx.map(v=>{
          return <div styleName='boxF' key={v.id}><Card
            bordered={false}
            cover={<img alt="example" src={v.imgbtn} style={{width:'200px',height:'100px'}}/>}
            style={{
              width: 300,
            }}
          >
            <p>消息名称:{v.name}</p>
            <p>所属公众号:{v.age}</p>
            <p>发送时间:2022.11.11</p>
            <p>接受粉丝:{v.price}</p>
            <p>发送状态:<Switch/></p>
            <p>推送账号:{v.list}</p>
            <Popconfirm
              title="是否删除"
              onConfirm={()=>{
                dispatch({
                  type:'tablex/delx',
                  payload:v.id
                })
              }}
            >
               <Button >删除气泡框</Button>
            </Popconfirm>
            <Button
               onClick={()=>{
                delete v.info
                history.push({
                  pathname:'/add',
                  search:qs.stringify(v)
                })
              }}
            >编辑</Button>
          </Card>
          </div>
        })
      }
      
    </div>
  )
}
