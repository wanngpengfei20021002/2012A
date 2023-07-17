import { memo } from 'react'
const styles = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  cursor: 'move',
}
export const Box = memo(function Box({ title, yellow, preview }) {
  return (
    <div
      style={{ ...styles }}
    >
      {title}
    </div>
  )
})
