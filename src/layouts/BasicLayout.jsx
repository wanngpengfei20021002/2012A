import React, { useState } from 'react'
import './styles.less'

export default function BasicLayout(props) {
	return (
		<div styleName="basic-layout">
			{props.children}
		</div>
	)
}
