import { SafeListing, SafeUser } from '../../../types/typings'
import Container from '../../components/Container/Container'
import Heading from '../../components/Heading/Heading'
import ListingCard from '../../components/ListingCard/ListingCard'

import * as Styled from './FavoritesClient.styles'

interface FavoritesClientProps {
  listings: SafeListing[]
  currentUser?: SafeUser | null
}

const FavoritesClient: React.FC<FavoritesClientProps> = ({
  listings,
  currentUser,
}) => {
  return (
    <Container>
      <Heading title="Favorites" subtitle="List of places you favorited!" />
      <Styled.Wrapper>
        {listings.map((listing: any) => (
          <ListingCard
            currentUser={currentUser}
            key={listing.id}
            data={listing}
          />
        ))}
      </Styled.Wrapper>
    </Container>
  )
}

export default FavoritesClient
