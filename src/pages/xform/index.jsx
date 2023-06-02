import React, { useState, useEffect, PureComponent, Fragment } from 'react'
import {
  Button,
} from 'antd'
import { history } from 'umi'
import './styles.less'


// Fragments, <></> === <template>
export default function XForm (props) {
  return (
    <>
      <h1>小花</h1>
      <h1>小白</h1>
      {
        [1, 2, 3].map((dt, index) => {
          return (
            <Fragment key={index}>
              <h1>小蓝</h1>
              <h1>小蓝2</h1>
            </Fragment>
          )
        })
      }
    </>
  )
}
