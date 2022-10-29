export interface BaseAttribute<Skills extends string> {
  level: number
  skills: Record<Skills, number>
}

export interface CharacterType {
  name: string
  health: number
  strength: BaseAttribute<'attack'>,
  dexterity: BaseAttribute<'stealth' | 'archery'>,
  intellect: BaseAttribute<'learnability' | 'survivability' | 'medicine'>,
  charisma: BaseAttribute<'intimidation' | 'discernment' | 'appearance' | 'manipulation'>
}
