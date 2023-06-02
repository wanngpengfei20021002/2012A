import React, { useState, useEffect } from 'react'
import { UploadOutlined } from '@ant-design/icons';
import { Button, Form, Popconfirm, Space, Upload } from 'antd'
import MyForm from './componets/MyForm'
import MyTable from './componets/MyTable';
import { QBox, QIcon, QImage, QTabs, QModal, QTable, QButton } from '@@@'

// 订单管理
export default function OrderManagement () {
  return (
    <div>
      {/* 表单 */}
      <MyForm />

      {/* 表格 */}
      <MyTable />
    </div>
  )
}

// 目录拆分
// 1. 业务 逻辑 + UI
// 2. 基础组件 + antd
// 3. 业务组件 + 基础组件
// 4. 基础提出来 npm 公司私有npm
// 4. 业务组价牛
// 5. utifl
// 6. cli
// 7. ssr webp
