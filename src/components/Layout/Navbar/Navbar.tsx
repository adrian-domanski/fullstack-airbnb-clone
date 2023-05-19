import Container from '../../Container/Container'
import Logo from './Logo/Logo'
import Search from './Search/Search'
import UserMenu from './UserMenu/UserMenu'

import * as Styled from './Navbar.styles'
import { SafeUser } from '../../../../types/typings'
import Categories from './Categories/Categories'

interface NavbarProps {
  currentUser?: SafeUser | null
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  return (
    <Styled.Nav>
      <Styled.Content>
        <Container>
          <Styled.ContainerContent>
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </Styled.ContainerContent>
        </Container>
      </Styled.Content>
      <Categories />
    </Styled.Nav>
  )
}

export default Navbar
