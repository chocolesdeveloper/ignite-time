import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { RouterProvider } from 'react-router-dom'
import { Router } from './Router'
import { CyclesContextProvider } from './context/CyclesContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CyclesContextProvider>
        <RouterProvider router={Router} />
      </CyclesContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
