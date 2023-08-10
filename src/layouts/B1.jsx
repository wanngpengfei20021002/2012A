import React from 'react'
import Header from '@/pages/header'

export default function  B1 (props) {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  )
}