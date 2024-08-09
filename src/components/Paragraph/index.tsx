import { P } from './styles'

export type Props = {
  children: string
  color?: 'main' | 'secondary'
  fontSize?: number
}

const Paragraph = ({ children, color = 'main', fontSize }: Props) => (
  <P fontSize={fontSize} color={color}>
    {children}
  </P>
)

export default Paragraph
