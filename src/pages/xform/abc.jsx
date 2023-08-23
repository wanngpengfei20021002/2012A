import React, { memo, useContext } from 'react'
import { Context } from '@/utils/context'

const isEqual = require('react-fast-compare');

export default Hoc(memo(Abc, isEqual))
function Abc (props) {
  const { x, setX } = props

  console.log('我渲染了');

  const onClick = () => {
    setX(x + 1)
  }

  return (
    <div onClick={onClick}>
      abc
    </div>
  )
}

function Hoc (Com) {
  return function () {
    const xxx = useContext(Context)
    return <Com {...xxx} />
  }
}
