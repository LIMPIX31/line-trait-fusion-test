import { FC } from 'react'
import { useCharacter } from 'hooks/useCharacter'
import { CharacterPreview } from 'components/molecules/CharacterPreview'
import styled from 'styled-components'
import { CharacterEditor } from 'components/organisms/CharacterEditor/CharacterEditor'

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  gap: 1rem;
`

export const App: FC = () => {
  const character = useCharacter()

  return <Center>
    <CharacterPreview character={character} />
    <CharacterEditor character={character} />
  </Center>
}
