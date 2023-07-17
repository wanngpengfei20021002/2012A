import { memo, useEffect, useState } from 'react'
import { Box } from './Box'
const styles = {
  display: 'inline-block',
  transform: 'rotate(-7deg)',
  WebkitTransform: 'rotate(-7deg)',
}
export const BoxDragPreview = memo(function BoxDragPreview({ title }) {
  return (
    <div style={styles}>
      <Box 
        title={title} 
        preview 
      />
    </div>
  )
})
