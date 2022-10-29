import styled from 'styled-components'
import { tint } from 'polished'
import { AttributeGroup } from 'components/atoms/AttributeGroup'

export const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  height: 64px;
  width: 320px;
  align-items: center;
  padding: 24px;
  box-sizing: content-box;
  box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.2);
  border-radius: ${({ theme }) => theme.radius};
`

export const TipaImage = styled.div`
  height: 64px;
  width: 64px;
  border-radius: ${({ theme }) => theme.radius};
  background-color: ${({ theme }) => tint(0.2, theme.back)};
`

export const Name = styled.div`
  font-weight: bold;
  color: ${({ theme }) => theme.front};
  font-size: 1.2rem;
`

export const Properties = styled.div`
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
