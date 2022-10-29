import { Character } from 'store/store'

let character: Character

export const useCharacter = () => {
  character = character ?? new Character()
  return character
}
