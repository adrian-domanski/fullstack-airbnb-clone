import React from 'react'
import { SafeUser } from '../../../types/typings'
import Navbar from './Navbar/Navbar'
import Providers from '../Providers/Providers'

interface LayoutProps {
  children: React.ReactNode
  // Todo: Move this to zustand
  currentUser: SafeUser | null
}

const Layout: React.FC<LayoutProps> = ({ children, currentUser }) => {
  return (
    <>
      <Navbar currentUser={currentUser} />
      {children}
      <Providers />
    </>
  )
}

export default Layout
