import { FC, useMemo } from 'react'
import { map } from 'utils/math'
import { Container, Filler } from './Bar.styles'
import { BarProps } from './Bar.types'

export const Bar: FC<IE['div'] & BarProps> = ({ min, max, value, color, ...props }) => {
  const normalized = useMemo(() => map(value, min, max), [value, min, max])

  return (
    <Container {...(props as object)}>
      <Filler value={normalized} color={color} />
    </Container>
  )
}
