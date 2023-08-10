import React, { useState } from 'react'

export default function useX1 (props) {
  const [data, setData] = useState(1)
  return [data, setData]
}
