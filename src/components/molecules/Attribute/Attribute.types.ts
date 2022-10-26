import { BarProps } from 'components/atoms/Bar'
import { ReactNode } from 'react'

export interface AttributeProps extends BarProps {
  children?: ReactNode
}

export type WrapperProps = Pick<BarProps, 'color'>
