import React, { useEffect } from 'react'
import axios from 'axios'
import {Menu} from 'antd'
import { useState } from 'react'
import { useHistory, useLocation } from 'umi'
import { useLayoutEffect } from 'react'
const deepArr=(arr)=>{
    let nList=[]
    arr.forEach(v => {
        if(v.children){
            nList.push(<Menu.SubMenu key={v.path} title={v.title}>{deepArr(v.children)}</Menu.SubMenu>)
        }else{
            nList.push(<Menu.Item key={v.path}>{v.title}</Menu.Item>)
        }
    });
    return nList
}
const appMenux=(arr,target)=>{
    let nList=[]
    arr.forEach(v=>{
        if(v.path===target){
            nList.push(v)
        }
        if(v.children){
            let childArr=appMenux(v.children,target)
            if(childArr.length){
                nList.push(v,...childArr)
            }
        }
    })
    return nList
}
function Menux() {
  const [list,setlist]=useState([])
  const {pathname}=useLocation()
  const [btn,setbtn]=useState([])
  const history=useHistory()
  useEffect(()=>{
    axios.get('/menu.json').then(res=>{
        console.log(res);
        setlist(res.data.data)
    })
  },[])
  useLayoutEffect(()=>{
    let appx=appMenux(list,pathname)
    let appbtn=appx.map(v=>{
        return v.path
    })
    setbtn(appbtn)
  },[list,pathname])
  console.log(list);
  return (
    <div>
      <Menu
         mode="inline"
         theme="dark"
         selectedKeys={[pathname]}
         onSelect={({ item, key, keyPath, selectedKeys, domEvent })=>{
            history.push(selectedKeys[0])
         }}
         openKeys={btn}
         onOpenChange={(e)=>{
            setbtn(e)
         }}
      >
        {deepArr(list)}
      </Menu>
    </div>
  )
}

export default Menux
