import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useCallback, useState } from 'react'
import { useRouter } from 'next/router'
import { SafeListing, SafeUser } from '../../../types/typings'
import Container from '../../components/Container/Container'
import Heading from '../../components/Heading/Heading'
import ListingCard from '../../components/ListingCard/ListingCard'

import * as Styled from './PropertiesClient.styles'

interface PropertiesClientProps {
  listings: SafeListing[]
  currentUser?: SafeUser | null
}

const PropertiesClient: React.FC<PropertiesClientProps> = ({
  listings,
  currentUser,
}) => {
  const router = useRouter()
  const [deletingId, setDeletingId] = useState('')

  const onDelete = useCallback(
    (id: string) => {
      setDeletingId(id)

      axios
        .delete(`/api/listings/${id}`)
        .then(() => {
          toast.success('Listing deleted')
          router.push(router.asPath)
        })
        .catch(error => {
          toast.error(error?.response?.data?.error)
        })
        .finally(() => {
          setDeletingId('')
        })
    },
    [router],
  )

  return (
    <Container>
      <Heading title="Properties" subtitle="List of your properties" />
      <Styled.Wrapper>
        {listings.map((listing: any) => (
          <ListingCard
            key={listing.id}
            data={listing}
            actionId={listing.id}
            onAction={onDelete}
            disabled={deletingId === listing.id}
            actionLabel="Delete property"
            currentUser={currentUser}
          />
        ))}
      </Styled.Wrapper>
    </Container>
  )
}

export default PropertiesClient
