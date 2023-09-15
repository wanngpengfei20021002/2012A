import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'umi';
function Menus() {
    const history = useHistory()
    const location = useLocation()
    const [selectedKeys, setSelectedKeys] = useState(location.pathname)
    useEffect(() => {
        setSelectedKeys(location.pathname)
    }, [location.pathname])
    return (
        <div>
            <Menu
                // theme="dark"
                mode="inline"
                defaultSelectedKeys={['/list']}
                selectedKeys={selectedKeys}
                onSelect={
                    ({ selectedKeys }) => {
                        setSelectedKeys(selectedKeys)
                        history.push(selectedKeys[0])
                    }
                }
                items={[
                    {
                        key: '/home',
                        icon: <UserOutlined />,
                        label: '通知公告',
                    },
                    {
                        key: '/admin',
                        icon: <VideoCameraOutlined />,
                        label: '公会通信',
                        children: [
                            {
                                key: '/list',
                                icon: <UserOutlined />,
                                label: '首页',
                            },
                            {
                                key: '/add',
                                icon: <UserOutlined />,
                                label: '表单',
                            },
                            {
                                key: '/cars',
                                icon: <UserOutlined />,
                                label: '卡片',
                            },
                            {
                                key: '/xq/id',
                                icon: <UserOutlined />,
                                label: '详情',
                            }
                        ]
                    },
                    {
                        key: '/admin2',
                        icon: <VideoCameraOutlined />,
                        label: '公会通信2',
                        children: [
                            {
                                key: '/list2',
                                icon: <UserOutlined />,
                                label: '首页',
                            },
                            {
                                key: '/add2',
                                icon: <UserOutlined />,
                                label: '表单',
                            },
                            {
                                key: '/cars2',
                                icon: <UserOutlined />,
                                label: '卡片',
                            },
                            {
                                key: '/xq2/id',
                                icon: <UserOutlined />,
                                label: '详情',
                            }
                        ]
                    },
                ]}
            />
        </div>
    )
}

export default Menus