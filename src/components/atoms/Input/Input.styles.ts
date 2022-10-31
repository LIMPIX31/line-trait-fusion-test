import styled from 'styled-components'
import { shade, tint } from 'polished'

export const StyledInput = styled.input`
  width: 100%;
  height: 2rem;
  background-color: ${({ theme }) => theme.back};
  border: 2px solid ${({ theme }) => tint(0.15, theme.back)};
  border-radius: ${({ theme }) => theme.radius};
  font-family: Cairo, sans-serif;
  padding: 0 1rem;
  color: ${({ theme }) => theme.front};
  transition: all .3s;
  
  &:focus {
    border-color: ${({ theme }) => theme.accent};
    background-color: ${({ theme }) => shade(0.1, theme.back)};
  }
`
