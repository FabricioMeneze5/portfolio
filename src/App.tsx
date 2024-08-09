import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import Aboult from './containers/Aboult'
import Projects from './containers/Projects'
import Sidebar from './containers/Sidebar'
import EstiloGlobal, { Container } from './styles'
import themeLight from './themes/light'
import themeDark from './themes/dark'

function App() {
  const [getTheme, setTheme] = useState(false)

  function changeTheme() {
    setTheme(!getTheme)
  }

  return (
    <ThemeProvider theme={getTheme ? themeDark : themeLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar changeTheme={changeTheme} />
        <main>
          <Aboult />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
