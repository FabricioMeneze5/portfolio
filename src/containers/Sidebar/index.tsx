import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Tittle from '../../components/Tittle'

import { Description, ThemeButtom, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Tittle fontSize={20}>Fabricio Menezes</Tittle>
      <Paragraph color="secondary">fabriciomeneze5</Paragraph>
      <Description color="main" fontSize={12}>
        Front End Developer
      </Description>
      <ThemeButtom>change theme</ThemeButtom>
    </SidebarContainer>
  </aside>
)

export default Sidebar
