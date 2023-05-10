import Container from '../Container/Container'
import Logo from './Logo/Logo'
import Search from './Search/Search'
import UserMenu from './UserMenu/UserMenu'

import * as Styled from './Navbar.styles'

interface NavbarProps {
  // currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <Styled.Nav>
      <Styled.Content>
        <Container>
          <Styled.ContainerContent>
            <Logo />
            <Search />
            <UserMenu />
          </Styled.ContainerContent>
        </Container>
      </Styled.Content>
    </Styled.Nav>
  )
}

export default Navbar
