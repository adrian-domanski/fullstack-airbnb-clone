import React from 'react'

import * as Styled from './MenuItem.styles'

interface MenuItemProps {
  onClick: () => void
  label: string
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label }) => {
  return <Styled.Wrapper onClick={onClick}>{label}</Styled.Wrapper>
}

export default MenuItem
