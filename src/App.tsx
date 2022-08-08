import { BrowserRouter } from 'react-router-dom'

import { Router } from './Router'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { CoffesAddedContextProvider } from './contexts/CoffeesAddedContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffesAddedContextProvider>
          <Router />
        </CoffesAddedContextProvider>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}
