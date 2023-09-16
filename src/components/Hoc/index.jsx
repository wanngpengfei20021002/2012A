import React, { Component, useEffect, useState } from 'react'

// 实时拿鼠标的位置
// WrappedComponent === Login
// WrappedComponent === Home
export default function Hoc (WrappedComponent) {
  return () => {
    const [xy, setXy] = useState({
      x: 0,
      y: 0,
    })

    useEffect(() => {
      const fun = ({ clientX, clientY }) => {

        setXy({
          x: clientX,
          y: clientY,
        })
      }

      // DOM2
      document.addEventListener('mousemove', fun)

      return () => {
        document.removeEventListener('mousemove', fun)
      }
    }, [])
    
    return <WrappedComponent xy={xy} />
  }
}
