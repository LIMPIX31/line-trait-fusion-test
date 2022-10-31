import styled from 'styled-components'
import { Attribute } from 'components/molecules/Attribute'
import { mix } from 'polished'

export const Split = styled.div`
  display: flex;
  gap: 1rem;
  padding: 24px;
  box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.2);
  border-radius: ${({ theme }) => theme.radius};
  box-sizing: content-box;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 320px;
`

export const GrowAttribute = styled(Attribute)`
  flex-grow: 1;
`

export const EditableBaseContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`

export const ParaName = styled.div`
  font-family: Cairo, sans-serif;
  color: ${({ theme }) => mix(0.5, theme.front, theme.back)};
  font-size: 0.75rem;
`
