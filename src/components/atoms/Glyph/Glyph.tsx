import { FC, PropsWithChildren } from 'react'
import { Wrapper } from './Glyph.styles'

export const Glyph: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}
