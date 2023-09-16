import React, { useState, useEffect } from 'react'

export default function useMove (props) {
  const [xy, setXy] = useState({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    const fn = ({ clientX, clientY }) => {
      setXy({
        x: clientX,
        y: clientY,
      })
    }
    
    document.addEventListener('mousemove', fn)

    return () => {
      document.removeEventListener('mousemove', fn)
    }
  }, [])


  return xy
}