import styled from 'styled-components'
import { FillerProps } from './Bar.types'
import { tint } from 'polished'

export const Container = styled.div`
  width: 100%;
  height: 1rem;
  border-radius: ${({ theme }) => theme.radius};
  overflow: hidden;
  background-color: ${({ theme }) => tint(0.2, theme.back)};
`

export const Filler = styled.div.attrs<FillerProps>(({ value, color, theme }) => ({
  style: {
    width: value + '%',
    backgroundColor: color ?? theme.accent,
  },
}))<FillerProps>`
  height: 100%;
  transition: width .3s;
  border-radius: inherit;
`
