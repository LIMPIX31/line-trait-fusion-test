import styled from 'styled-components'

export const RemButton = styled.button<{ plus?: boolean }>`
  width: 1rem;
  height: 1rem;
  border-radius: 2px;
  background-color: ${({ plus }) => plus ? '#a2ff00' : '#ff3c00'};
  position: relative;
  &:before,
  &:after {
    display: block;
    background-color: ${({ theme }) => theme.back};
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    width: 50%;
    height: 1px;
  }
  
  &:after {
    height: 50%;
    width: 1px;
    display: ${({ plus }) => plus ? 'block' : 'none'};
  }
`

export const RemGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`
