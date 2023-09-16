import React, { useState } from 'react'

export default function useData (props) {
  const { dispatch } = props 
  const [x, setX] = useState([
    { value: '1', label: '测试1' },
    { value: '2', label: '测试2' },
    { value: '3', label: '测试3' },
  ])

  const dt = [
    {
      id: 1,
      type: 'Input',
      onBlur: evt => {
        setX([
          { value: '1', label: '1' },
          { value: '2', label: '2' },
        ])
      }
    },
    {
      id: 2,
      type: 'Input',
    },
    {
      id: 3,
      type: 'Select',
    },
    {
      id: 4,
      type: 'Select',
      cell: 10,
      options: x,
    },
  ]

  return {
    dt,
  }
}