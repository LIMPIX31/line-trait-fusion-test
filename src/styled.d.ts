import { ThemeType } from './style/theme'

declare module 'styled-components' {
  interface DefaultTheme extends ThemeType {}
}
