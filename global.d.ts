import * as React from 'react'
import { RowProps } from 'antd'

interface IProps extends RowProps {
  title?: string,
  extraContent?: React.ReactNode,
  children?: React.ReactNode,
  className: string,
}

declare const QBox: React.FC<IProps>

export default QBox
