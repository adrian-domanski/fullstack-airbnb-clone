import { IconType } from 'react-icons'

import * as Styled from './ListingCategory.styles'

interface CategoryViewProps {
  icon: IconType
  label: string
  description: string
}

const CategoryView: React.FC<CategoryViewProps> = ({
  icon: Icon,
  label,
  description,
}) => {
  return (
    <Styled.Wrapper>
      <Styled.Content>
        <Styled.IconWrapper>
          <Icon size={40} />
        </Styled.IconWrapper>
        <Styled.DescriptionWrapper>
          <Styled.Label>{label}</Styled.Label>
          <Styled.Description>{description}</Styled.Description>
        </Styled.DescriptionWrapper>
      </Styled.Content>
    </Styled.Wrapper>
  )
}

export default CategoryView
