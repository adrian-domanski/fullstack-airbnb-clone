import * as Styled from './Container.styles'

interface ContainerProps {
  children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <Styled.Wrapper>{children}</Styled.Wrapper>
}

export default Container
