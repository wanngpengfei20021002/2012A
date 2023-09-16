import React from 'react'
import { Breadcrumb } from 'antd'
import { Link, useLocation } from 'umi'

const obj = {
  '/login': ['Navigation Two', '登录'],
  '/home': ['Navigation Two', '首页'],
}

export default function QBreadcrumb(props) {
  let { pathname } = useLocation()

  return (
    <Breadcrumb>
      {
        obj['/login'].map((dt, index) => {
          return <Breadcrumb.Item key={index}>{dt}</Breadcrumb.Item>
        })
      }
      {/* {
        obj[pathname].map((dt, index) => {
          return <Breadcrumb.Item key={index}>{dt}</Breadcrumb.Item>
        })
      } */}
    </Breadcrumb>
  )
}