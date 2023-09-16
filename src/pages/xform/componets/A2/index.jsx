import React from 'react'
import useX1 from '../../useX1'

export default function A2 (props) {
  const [data, setData] = useX1()

  return (
    <div onClick={() => setData(data + 1)}>
      A2: {data}
    </div>
  )
}
