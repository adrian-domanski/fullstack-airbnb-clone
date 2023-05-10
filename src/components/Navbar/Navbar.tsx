// import { SafeUser } from "@/app/types";

import Container from '../Container/Container'
import Logo from './Logo/Logo'

import * as Styled from './Navbar.styles'
import Search from './Search/Search'

// import Categories from "./Categories";
// import Container from "../Container";
// import Search from "./Search";
// import UserMenu from "./UserMenu";

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
            {/* <UserMenu currentUser={currentUser} /> */}
          </Styled.ContainerContent>
        </Container>
      </Styled.Content>
      {/* <Categories /> */}
    </Styled.Nav>
  )
}

export default Navbar
