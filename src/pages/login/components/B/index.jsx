import React, { useContext } from 'react'
import { Button } from 'antd'
import { ThemeContext } from '../../context'

export default function B (props) {
  const xxx = useContext(ThemeContext)
  const { count, age, setCount, setAge } = xxx

  console.log(xxx, 'xxx');

  const onClick = () => {
    setCount(count + 1)
    setAge(age + 1)
  }

  return (
    <div>
      子组件 B
      <h1>{count}</h1>
      <h1>{age}</h1>
      <Button onClick={onClick}>点我</Button>
    </div>
  )
}
