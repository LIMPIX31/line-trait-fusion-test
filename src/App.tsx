import { ChangeEvent, FC, useCallback, useRef } from 'react'
import { useCharacter } from 'hooks/useCharacter'
import { CharacterPreview } from 'components/molecules/CharacterPreview'
import styled from 'styled-components'
import { CharacterEditor } from 'components/organisms/CharacterEditor'
import { Button } from 'components/atoms/Button'

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  gap: 1rem;
`

const Buttons = styled.div`
  display: flex;
  gap: 1rem;
`

export const App: FC = () => {
  const character = useCharacter()

  const fileRef = useRef<HTMLInputElement>(null)

  const save = useCallback(() => {
    const a = document.createElement('a')
    const file = new Blob([JSON.stringify(character.toJson())], {type: 'text/plain'})
    a.href = URL.createObjectURL(file)
    a.download = 'character.json'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }, [])

  const load = useCallback(({ target: { files } }: ChangeEvent<HTMLInputElement>) => {
    files?.item?.(0)?.text?.()?.then?.((json: string) => {
      character.fromJson(JSON.parse(json))
    })
  }, [])

  return <Center>
    <CharacterPreview character={character} />
    <CharacterEditor character={character} />
    <Buttons>
      <Button primary onClick={() => !character.isDead && character.damaged++}>Damage</Button>
      <Button onClick={save}>Save</Button>
      <Button onClick={() => fileRef.current?.click()}>Load</Button>
      <Button onClick={() => character.damaged = 0}>Reset</Button>
    </Buttons>
    <input
      ref={fileRef}
      type={'file'}
      onChange={load}
      style={{ display: "none" }}
    />
  </Center>
}
