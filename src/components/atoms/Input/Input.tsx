import { FC } from 'react'
import { StyledInput } from './Input.styles'
import styled from 'styled-components'

export const Input: FC<IE['input']> = props => (
  <StyledInput {...(props as object)} />
)

export const Title = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.front};
  font-family: Cairo, sans-serif;
`
