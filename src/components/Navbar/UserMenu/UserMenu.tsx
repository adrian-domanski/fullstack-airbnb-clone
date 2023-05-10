import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

import * as Styled from './UserMenu.styles'
import Avatar from '../Avatar/Avatar'
import MenuItem from '../MenuItem/MenuItem'

interface UserMenuProps {
  currentUser?: any // change that
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const router = useRouter()

  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = useCallback(() => {
    setIsOpen(value => !value)
  }, [])

  return (
    <Styled.Wrapper>
      <Styled.Content>
        <Styled.LogoWrapper onClick={() => {}}>
          Airbnb your home
        </Styled.LogoWrapper>
        <Styled.ToggleWrapper onClick={toggleOpen}>
          <AiOutlineMenu />
          <Styled.UserImageWrapper>
            <Avatar src={currentUser?.image} />
          </Styled.UserImageWrapper>
        </Styled.ToggleWrapper>
      </Styled.Content>
      {isOpen && (
        <Styled.MenuWrapper>
          <Styled.MenuContent>
            <MenuItem label="My trips" onClick={() => router.push('/trips')} />
            <MenuItem
              label="My favorites"
              onClick={() => router.push('/favorites')}
            />
            <MenuItem
              label="My reservations"
              onClick={() => router.push('/reservations')}
            />
            <MenuItem
              label="My properties"
              onClick={() => router.push('/properties')}
            />
            {/* <MenuItem 
                  label="Airbnb your home" 
                  onClick={rentModal.onOpen}
                />
                <hr />
                <MenuItem 
                  label="Logout" 
                  onClick={() => signOut()}
                />
              </> */}

            {/* <MenuItem 
                  label="Login" 
                  onClick={loginModal.onOpen}
                />
                <MenuItem 
                  label="Sign up" 
                  onClick={registerModal.onOpen}
                /> */}
          </Styled.MenuContent>
        </Styled.MenuWrapper>
      )}
    </Styled.Wrapper>
  )
}

export default UserMenu
