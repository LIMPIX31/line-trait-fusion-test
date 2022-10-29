import { FC } from 'react'
import { CharacterPreviewProps } from './CharacterPreview.props'
import { Name, Properties, TipaImage, Wrapper } from './CharacterPreview.styles'
import { AttributeGroup } from 'components/atoms/AttributeGroup'
import { Attribute } from 'components/molecules/Attribute'
import { Glyph } from 'components/atoms/Glyph'
import { Heart } from 'components/other/glyphs'

export const CharacterPreview: FC<CharacterPreviewProps> = ({ character }) => {
  return (
    <Wrapper>
      <TipaImage />
      <Properties>
        <Name>{character.name}</Name>
        <AttributeGroup>
          <Attribute min={0} max={character.maxHealth} value={character.health} color={'#ff002f'}>
            <Glyph>
              {Heart}
            </Glyph>
          </Attribute>
        </AttributeGroup>
      </Properties>
    </Wrapper>
  )
}
