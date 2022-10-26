export interface BarProps {
  min: number
  max: number
  value: number
  color?: string
}

export type FillerProps = Pick<BarProps, 'value' | 'color'>
