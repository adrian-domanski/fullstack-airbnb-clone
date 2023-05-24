import React from 'react'

import * as Styled from './Footer.styles'
import Container from '../../Container/Container'

const Footer = () => {
  return (
    <Styled.Wrapper>
      <Container>
        <Styled.Content>
          <Styled.Paragraph>
            &copy; {new Date().getFullYear()} - Airbnb Clone, Inc.
          </Styled.Paragraph>
        </Styled.Content>
      </Container>
    </Styled.Wrapper>
  )
}

export default Footer
