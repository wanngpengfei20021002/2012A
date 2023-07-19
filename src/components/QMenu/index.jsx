import React, { useState } from 'react'
import { Menu } from 'antd'
import { history, useLocation } from 'umi'
import { MailOutlined, CalendarOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons' // icon

export default function QMenu (props) {
  const { onClick } = props
  let { pathname } = useLocation() // 获取 location 参数
  const [x, setX] = useState([pathname])
  const [openKeys, setOpenKeys] = useState(['sub1'])

  function getItem (label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    }
  }

  const items = [
    getItem('通知公告', '1', <MailOutlined />),
    getItem('Navigation Two', '2', <CalendarOutlined />),
    getItem('Navigation Two', 'sub1', <AppstoreOutlined />, [
      getItem('登录', '/login'),
      getItem('首页', '/home'),
      getItem('详情', '/order'),
      getItem('低代码', '/user/didaima'),
      getItem('Submenu', 'sub1-2', null, [getItem('Option 5', '5'), getItem('Option 6', '6')]),
    ]),
    getItem('Navigation Three', 'sub2', <SettingOutlined />, [
      getItem('Option 7', '7'),
      getItem('Option 8', '8'),
      getItem('Option 9', '9'),
      getItem('Option 10', '10'),
    ]),
  ]

  // 一级菜单的 key
  const root = ['1', '2', 'sub1', 'sub2']

  const onOpenChange = keys => {
    const value = keys.find(key => !openKeys.includes(key))
    if (!root.includes(value)) {
      setOpenKeys(keys)

    } else {
      setOpenKeys(value ? [value] : [])
    }
  }

  const onSelect = opt => {
    const { selectedKeys, key } = opt
    onClick(opt)
    setX(selectedKeys) // 选中
    history.push(key)
  }

  return (
    <Menu
      style={{width: 256}}
      selectedKeys={x} // 初始选中的菜单项 key 数组
      openKeys={openKeys} // 初始展开的 SubMenu 菜单项 key 数组
      mode="inline"
      onSelect={onSelect} // 
      onOpenChange={onOpenChange}
      theme="light"
      items={items}
    />
  )
}

