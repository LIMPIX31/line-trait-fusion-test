import { FC, ReactNode, useCallback, useMemo } from 'react'
import { CharacterEditorProps } from './CharacterEditor.props'
import { Container, EditableBaseContainer, Group, GrowAttribute, ParaName, Split } from './CharacterEditor.styles'
import { Input, Title } from 'components/atoms/Input/Input'
import { observer } from 'mobx-react-lite'
import { Charisma, Dexterity, Dodge, Intellect, Strength, Vigor } from 'components/other/glyphs'
import { RemButton, RemGroup } from 'components/atoms/RemButton/RemButton'
import { BaseAttribute } from 'store/type'

const Parameter = observer(<A extends string>({
    icon,
    name,
    param,
    skill,
    color,
    maplevel,
  }: { icon?: ReactNode, name: string, param: BaseAttribute<A>, skill?: A, color?: string, maplevel?: boolean }) => {
  const max = useMemo(() => skill ? param.level : 4, [param.level, skill])
  const value = skill ? param.skills[skill] : param.level
  const levl = ['Untrained', 'Noob', 'Skilled', 'Adept', 'Expert'][value]

  const up = useCallback(() => {
    if (skill) {
      if (param.skills[skill] < param.level) param.skills[skill]++
    } else {
      if (param.level < 4) param.level++
    }
  }, [skill, param.level])

  const down = useCallback(() => {
    if (skill) {
      if (param.skills[skill] > 0) param.skills[skill]--
    } else {
      if (param.level > 0) param.level--
    }
  }, [skill, param.level])

  return <>
    <ParaName>{name} [{maplevel ? levl : value}]</ParaName>
    <EditableBaseContainer>
      <GrowAttribute min={0} max={max} value={value} color={color}>
        {icon}
      </GrowAttribute>
      <RemGroup>
        <RemButton onClick={down} />
        <RemButton plus onClick={up} />
      </RemGroup>
    </EditableBaseContainer>
  </>
})

export const CharacterEditor: FC<CharacterEditorProps> = observer(({ character }) => {
  return (
    <Split>
      <Container>
        <Input value={character.name} onChange={({ target }) => character.name = target.value} />
        <Title>Base parameters</Title>
        <Group>
          <Parameter param={character.strength} color={'#358cff'} name={'Strength'} icon={Strength} />
          <Parameter param={character.dexterity} color={'#ffd035'} name={'Dexterity'} icon={Dexterity} />
          <Parameter param={character.intellect} color={'#9035ff'} name={'Intellect'} icon={Intellect} />
          <Parameter param={character.charisma} color={'#ff35bf'} name={'Charisma'} icon={Charisma} />
        </Group>
        <Title>Additional</Title>
        <Group>
          <ParaName>Dodging</ParaName>
          <GrowAttribute min={0} max={14} value={character.dodging} color={'#ddf3ff'}>{Dodge}</GrowAttribute>
          <ParaName>Vigor</ParaName>
          <GrowAttribute min={0} max={8} value={character.vigor} color={'#ff7556'}>{Vigor}</GrowAttribute>
        </Group>
      </Container>
      <Container>
        <Title>Skills</Title>
        <Group>
          <Parameter name={'Attack'} param={character.strength} skill={'attack'} color={'#358cff'} maplevel />
          <Parameter name={'Stealth'} param={character.dexterity} skill={'stealth'} color={'#ffd035'} maplevel />
          <Parameter name={'Archery'} param={character.dexterity} skill={'archery'} color={'#ffd035'} maplevel />
          <Parameter name={'Learnability'} param={character.intellect} skill={'learnability'} color={'#9035ff'} maplevel />
          <Parameter name={'Medicine'} param={character.intellect} skill={'medicine'} color={'#9035ff'} maplevel />
          <Parameter name={'Survivability'} param={character.intellect} skill={'survivability'} color={'#9035ff'} maplevel />
          <Parameter name={'Appearance'} param={character.charisma} skill={'appearance'} color={'#ff35bf'} maplevel />
          <Parameter name={'Discernment'} param={character.charisma} skill={'discernment'} color={'#ff35bf'} maplevel />
          <Parameter name={'Intimidation'} param={character.charisma} skill={'intimidation'} color={'#ff35bf'} maplevel />
          <Parameter name={'Manipulation'} param={character.charisma} skill={'manipulation'} color={'#ff35bf'} maplevel />
        </Group>
      </Container>
    </Split>
  )
})
