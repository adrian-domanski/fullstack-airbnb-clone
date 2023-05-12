import 'twin.macro'

import * as Styled from './Button.styles'

interface ButtonProps {
  label: string
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  outline?: boolean
  small?: boolean
  icon?: JSX.Element
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon,
}) => {
  return (
    <Styled.Wrapper
      small={small}
      outline={outline}
      disabled={disabled}
      onClick={onClick}
    >
      {icon && <Styled.IconWrapper>{icon}</Styled.IconWrapper>}
      {label}
    </Styled.Wrapper>
  )
}

export default Button
