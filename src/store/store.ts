import type { CharacterType } from 'store/type'
import { makeAutoObservable } from 'mobx'

export class Character implements CharacterType {
  name: string = 'Character Name'
  strength = {
    level: 3,
    skills: {
      attack: 1,
    },
  }
  dexterity = {
    level: 2,
    skills: {
      archery: 1,
      stealth: 2,
    },
  }
  intellect = {
    level: 4,
    skills: {
      learnability: 2,
      medicine: 1,
      survivability: 3,
    },
  }
  charisma = {
    level: 2,
    skills: {
      appearance: 2,
      discernment: 1,
      intimidation: 2,
      manipulation: 1,
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

  get dodging() {
    return 10 + this.dexterity.level
  }

  get vigor() {
    return this.intellect.level + this.dexterity.level
  }
}
