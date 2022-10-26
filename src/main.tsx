import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { Style } from './style/global'
import { ThemeProvider } from 'styled-components'
import { theme } from './style/theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Style />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
