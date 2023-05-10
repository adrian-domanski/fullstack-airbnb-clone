import * as Styled from './Heading.styles'

interface HeadingProps {
  title: string
  subtitle?: string
  center?: boolean
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle, center }) => {
  return (
    <Styled.Wrapper center={center}>
      <Styled.Content>{title}</Styled.Content>
      <Styled.Subtitle>{subtitle}</Styled.Subtitle>
    </Styled.Wrapper>
  )
}

export default Heading
