import React, { useState, useEffect, forwardRef, memo } from 'react'

export default function useMove (props) {
  const [xy, setXy] = useState({
    x: 0,
    y: 0,
  })
  
  useEffect(() => {
    const fun = evt => {
      setXy({
        x: evt.clientX,
        y: evt.clientY,
      })
    }

    document.addEventListener('mousemove', fun)

    // 销毁
    return () => {
      document.removeEventListener('mousemove', fun)
    }
  }, [])

  return [xy, setXy]
}
