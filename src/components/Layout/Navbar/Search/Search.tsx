import { BiSearch } from 'react-icons/bi'

import * as Styled from './Search.styles'
import useSearchModal from '../../../../hooks/useSearchModal'

const Search = () => {
  const searchModal = useSearchModal()

  return (
    <Styled.Wrapper onClick={searchModal.onOpen}>
      <Styled.Content>
        <Styled.LocationLabel>Location Label</Styled.LocationLabel>
        <Styled.DurationLabel>Duration Label</Styled.DurationLabel>
        <Styled.GuestLabelWrapper>
          <Styled.GuestLabel>Guest label</Styled.GuestLabel>
          <Styled.SearchWrapper>
            <BiSearch size={18} />
          </Styled.SearchWrapper>
        </Styled.GuestLabelWrapper>
      </Styled.Content>
    </Styled.Wrapper>
  )
}

export default Search
