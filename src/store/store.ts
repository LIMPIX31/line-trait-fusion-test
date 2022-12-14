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
    return this.health <= 0
  }

  get dodging() {
    return 10 + this.dexterity.level
  }

  get vigor() {
    return this.intellect.level + this.dexterity.level
  }

  toJson() {
    return {
      name: this.name,
      strength: this.strength,
      dexterity: this.dexterity,
      intellect: this.intellect,
      charisma: this.charisma
    }
  }

  fromJson (json: Record<string, never>){
    this.name = json.name ?? this.name
    this.strength = json.strength ?? this.strength
    this.dexterity = json.dexterity ?? this.dexterity
    this.intellect = json.intellect ?? this.intellect
    this.charisma = json.charisma ?? this.charisma
  }
}
