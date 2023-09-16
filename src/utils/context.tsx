import React, { createContext } from 'react'

interface MyContext {
  show: boolean
  setShow: (opt: boolean) => void
  title: boolean
}

export const Context = createContext('小花')
