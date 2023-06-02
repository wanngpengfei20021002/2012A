import React from 'react'
import { QMenu } from '@@@'
import './styles.less'

export default function BasicLayout (props) {
  return (
		<div styleName="basic-layout">
			<QMenu />
			<div styleName="box">{props.children}</div>
		</div>
  )
}
