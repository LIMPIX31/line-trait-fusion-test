import styled from 'styled-components'
import { WrapperProps } from './Attribute.types'

export const Wrapper = styled.div.attrs<WrapperProps>(({ theme, color }) => ({
  style: {
    color: color ?? theme.accent,
  },
}))<WrapperProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`
