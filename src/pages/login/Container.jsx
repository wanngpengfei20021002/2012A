import { memo } from 'react'
import { Box } from './Box'
import { Dustbin } from './Dustbin'

export const Container = memo(function Container() {
  return (
    <div>
      <div style={{ overflow: 'hidden', clear: 'both', border: '1px #f00 solid' }}>
        <Dustbin />
      </div>
      <div style={{ overflow: 'hidden', clear: 'both' }}>
        <Box name="Glass" xxx="111" />
        <Box name="Banana" xxx="111" />
        <Box name="Paper" xxx="111" />
      </div>
    </div>
  )
})
