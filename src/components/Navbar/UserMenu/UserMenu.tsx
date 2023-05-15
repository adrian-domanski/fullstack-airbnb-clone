import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

import * as Styled from './UserMenu.styles'
import Avatar from '../Avatar/Avatar'
import MenuItem from '../MenuItem/MenuItem'
import useRegisterModal from '../../../hooks/useRegisterModal'
import useLoginModal from '../../../hooks/useLoginModal'
import { SafeUser } from '../../../../types/typings'
import { signOut } from 'next-auth/react'

interface UserMenuProps {
  currentUser?: SafeUser | null // change that
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const registerModal = useRegisterModal()
  const loginModal = useLoginModal()
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
            {currentUser ? (
              <>
                <MenuItem
                  label="My trips"
                  onClick={() => router.push('/trips')}
                />
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
                <MenuItem label="Airbnb your home" onClick={() => {}} />
                <hr />
                <MenuItem label="Logout" onClick={() => signOut()} />
              </>
            ) : (
              <>
                <MenuItem label="Sign up" onClick={registerModal.onOpen} />
                <MenuItem label="Log in" onClick={loginModal.onOpen} />
              </>
            )}
          </Styled.MenuContent>
        </Styled.MenuWrapper>
      )}
    </Styled.Wrapper>
  )
}

export default UserMenu
