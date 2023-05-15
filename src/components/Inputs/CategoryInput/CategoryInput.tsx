import { IconType } from 'react-icons'

import * as Styled from './CategoryInput.styles'

interface CategoryInputProps {
  icon: IconType
  label: string
  selected?: boolean
  onClick: (value: string) => void
}

const CategoryInput: React.FC<CategoryInputProps> = ({
  icon: Icon,
  label,
  selected,
  onClick,
}) => {
  return (
    <Styled.Wrapper isSelected={selected} onClick={() => onClick(label)}>
      <Icon size={30} />
      <Styled.Label>{label}</Styled.Label>
    </Styled.Wrapper>
  )
}

export default CategoryInput
