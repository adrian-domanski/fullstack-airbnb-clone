import React from 'react'
import Container from '../../components/Container/Container'

import * as Styled from './Listings.styles'
import EmptyState from '../../EmptyState/EmptyState'
import { SafeListing, SafeUser } from '../../../types/typings'
import ListingCard from '../../components/ListingCard/ListingCard'

interface ListingsProps {
  listings: SafeListing[]
  currentUser: SafeUser | null
}

const Listings = ({ listings, currentUser }: ListingsProps) => {
  if (listings.length === 0) {
    return <EmptyState showReset />
  }

  return (
    <Container>
      <Styled.ListingsWrapper>
        {listings.map((listing: any) => (
          <ListingCard
            currentUser={currentUser}
            key={listing.id}
            data={listing}
          />
        ))}
      </Styled.ListingsWrapper>
    </Container>
  )
}

export default Listings
