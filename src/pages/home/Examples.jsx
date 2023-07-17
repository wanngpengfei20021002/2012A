import { useCallback, useState } from 'react'
import { Container } from './Container'
import { CustomDragLayer } from './CustomDragLayer'

export const Example = () => {
  return (
    <div>
      <Container />
      <CustomDragLayer />
    </div>
  )
}
