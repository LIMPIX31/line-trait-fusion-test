import { FC } from 'react'
import { AttributeProps } from './Attribute.types'
import { Wrapper } from './Attribute.styles'
import { Bar } from 'components/atoms/Bar'
import { Glyph } from 'components/atoms/Glyph'

export const Attribute: FC<IE['div'] & AttributeProps> = ({ min, max, value, color, children, ...props }) => {
  return (
    <Wrapper color={color} {...(props as object)}>
      {children && <Glyph>{children}</Glyph>}
      <Bar min={min} max={max} value={value} color={color} />
    </Wrapper>
  )
}
