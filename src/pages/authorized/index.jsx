import React, { useEffect } from 'react'
import { Redirect, getDvaApp } from 'umi'
import { connect } from 'dva'

export default function Authorized (props) {
    return props.children

}
