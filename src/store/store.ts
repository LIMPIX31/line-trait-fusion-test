import type { CharacterType } from 'store/type'
import { makeAutoObservable } from 'mobx'

export class Character implements CharacterType {
  name: string = 'Character Name'
  strength = {
    level: 0,
    skills: {
      attack: 0,
    },
  }
  dexterity = {
    level: 0,
    skills: {
      archery: 0,
      stealth: 0,
    },
  }
  intellect = {
    level: 0,
    skills: {
      learnability: 0,
      medicine: 0,
      survivability: 0,
    },
  }
  charisma = {
    level: 0,
    skills: {
      appearance: 0,
      discernment: 0,
      intimidation: 0,
      manipulation: 0,
    },
  }
  damaged = 0

  constructor() {
    makeAutoObservable(this)
  }

  get maxHealth() {
    return this.strength.level + 3
  }

  get health() {
    return this.maxHealth - this.damaged
  }

  get isDead() {
    return this.maxHealth - this.health <= 0
  }
}
