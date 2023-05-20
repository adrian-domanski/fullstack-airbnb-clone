import { toast } from 'react-hot-toast'
import axios from 'axios'
import { useCallback, useState } from 'react'
import { useRouter } from 'next/router'
import { SafeReservation, SafeUser } from '../../../types/typings'
import Heading from '../../components/Heading/Heading'
import Container from '../../components/Container/Container'
import ListingCard from '../../components/ListingCard/ListingCard'

import * as Styled from './TripsClient.styles'

interface TripsClientProps {
  reservations: SafeReservation[]
  currentUser?: SafeUser | null
}

const TripsClient: React.FC<TripsClientProps> = ({
  reservations,
  currentUser,
}) => {
  const router = useRouter()
  const [deletingId, setDeletingId] = useState('')

  const onCancel = useCallback(
    (id: string) => {
      setDeletingId(id)

      axios
        .delete(`/api/reservations/${id}`)
        .then(() => {
          toast.success('Reservation cancelled')
          router.push(router.asPath)
        })
        .catch(() => {
          toast.error("Couldn't cancel reservation")
        })
        .finally(() => {
          setDeletingId('')
        })
    },
    [router],
  )

  return (
    <Container>
      <Heading
        title="Trips"
        subtitle="Where you've been and where you're going"
      />
      <Styled.Wrapper>
        {reservations.map((reservation: any) => (
          <ListingCard
            key={reservation.id}
            data={reservation.listing}
            reservation={reservation}
            actionId={reservation.id}
            onAction={onCancel}
            disabled={deletingId === reservation.id}
            actionLabel="Cancel reservation"
            currentUser={currentUser}
          />
        ))}
      </Styled.Wrapper>
    </Container>
  )
}

export default TripsClient
