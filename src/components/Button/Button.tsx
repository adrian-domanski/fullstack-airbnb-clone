import { IconType } from 'react-icons'

import * as Styled from './Button.styles'

interface ButtonProps {
  label: string
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  outline?: boolean
  small?: boolean
  icon?: IconType
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
}) => {
  return (
    <Styled.Wrapper
      small={small}
      outline={outline}
      disabled={disabled}
      onClick={onClick}
    >
      {Icon && <Icon size={24} tw="absolute left-4 top-3" />}
      {label}
    </Styled.Wrapper>
  )
}

export default Button
