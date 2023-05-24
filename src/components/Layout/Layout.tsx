import React from 'react'
import { SafeUser } from '../../../types/typings'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import Providers from '../Providers/Providers'

import * as Styled from './Layout.styles'

interface LayoutProps {
  children: React.ReactNode
  // Todo: Move this to zustand
  currentUser: SafeUser | null
}

const Layout: React.FC<LayoutProps> = ({ children, currentUser }) => {
  return (
    <>
      <Navbar currentUser={currentUser} />
      <Styled.ContentWrapper>{children}</Styled.ContentWrapper>
      <Footer />
      <Providers />
    </>
  )
}

export default Layout
