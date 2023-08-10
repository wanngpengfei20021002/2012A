import React from 'react'
import useX1 from '../../useX1'

export default function A1 (props) {
  const [data, setData] = useX1()

  return (
    <div>
      A1: {data}
    </div>
  )
}
