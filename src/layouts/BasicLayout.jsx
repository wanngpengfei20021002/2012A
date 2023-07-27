import React from 'react'
// import { Provider } from 'mobx-react'
import { Tag } from 'antd'
// import store from '@/mobx'
import { QMenu, QBreadcrumb } from '@@@'
import './styles.less'

const data = {
	'首页': '/home',
	'详情': '/xxxx',
}

Object.values(data)
Object.keys(data) // [首页, 详情]

export default function BasicLayout (props) {
	const onClick = opt => {
		console.log(opt, 'opt');
	}

	const onClick2 = opt => {
		console.log(data[opt.target.innerText], 111);
	}

  return (
		<div styleName="basic-layout">
			<QMenu 
				onClick={onClick}
			/>
			
			<div styleName="box">
				{/* 面包屑 */}
				<QBreadcrumb />

				{
					Object.keys(data).map((dt, index) => {
						return <Tag key={index} onClick={onClick2}>{dt}</Tag>
					})
				}
				
				{props.children}
			</div>
		</div>
  )
}



