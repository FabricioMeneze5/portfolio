import Tittle from '../../components/Tittle'
import Paragraph from '../../components/Paragraph'
import { GitHubSection } from './styles'

const Aboult = () => (
  <section>
    <Tittle fontSize={16}>Aboult me</Tittle>
    <Paragraph color="secondary">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ad
      asperiores officia iure nobis nihil laboriosam deleniti, facere vel
      eligendi eos debitis placeat commodi assumenda autem. Non earum nesciunt
      reiciendis.
    </Paragraph>
    <GitHubSection>
      <img
        height="180em"
        src="https://github-readme-stats.vercel.app/api?username=fabriciomeneze5&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"
      />
      <img
        height="180em"
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=fabriciomeneze5&layout=compact&langs_count=7&theme=dracula"
      />
    </GitHubSection>
  </section>
)

export default Aboult
