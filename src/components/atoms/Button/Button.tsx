import styled from 'styled-components'
import { tint } from 'polished'

export const Button = styled.div<{ primary?: boolean }>`
  border-radius: ${({ theme }) => theme.radius};
  background-color: ${({ theme, primary }) => primary ? theme.accent : tint(0.05, theme.back)};
  padding: 5px 20px;
  font-family: Cairo, sans-serif;
  color: ${({ theme, primary }) => primary ? theme.back :theme.front};
  cursor: pointer;
  box-shadow: 0 0 15px 1px rgba(0,0,0,.2);
`
