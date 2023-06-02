import React, { useEffect } from 'react'
import { Redirect, getDvaApp } from 'umi'
import { connect } from 'dva'

export default function Authorized (props) {
  if (localStorage.getItem('token')) {
    return props.children

  } else {
    return <Redirect to="/user/login" />
  }
}
