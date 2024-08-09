import Aboult from './containers/Aboult'
import Projects from './containers/Projects'
import Sidebar from './containers/Sidebar'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <Aboult />
          <Projects />
        </main>
      </Container>
    </>
  )
}

export default App
