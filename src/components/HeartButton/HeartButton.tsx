import { SafeUser } from '../../../types/typings'
import useFavorite from '../../hooks/useFavorite'

import * as Styled from './HeartButton.styles'

interface HeartButtonProps {
  listingId: string
  currentUser?: SafeUser | null
}

const HeartButton: React.FC<HeartButtonProps> = ({
  listingId,
  currentUser,
}) => {
  const { hasFavorited, toggleFavorite } = useFavorite({
    listingId,
    currentUser,
  })

  return (
    <Styled.Wrapper onClick={toggleFavorite}>
      <Styled.HeartIcon size={28} />
      <Styled.FilledHeartIcon hasFavorited={hasFavorited} size={24} />
    </Styled.Wrapper>
  )
}

export default HeartButton
