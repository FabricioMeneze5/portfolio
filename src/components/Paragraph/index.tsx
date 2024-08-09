import { P } from './styles'

export type Props = {
  children: string
  color?: 'main' | 'secondary'
}

const Paragraph = ({ children, color = 'main' }: Props) => (
  <P color={color}>{children}</P>
)

export default Paragraph
