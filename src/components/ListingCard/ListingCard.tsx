import { useRouter } from 'next/navigation'
import { useCallback, useMemo } from 'react'
import { SafeListing, SafeReservation, SafeUser } from '../../../types/typings'
import useCountries from '../../hooks/useCountries'
import Button from '../Button/Button'
import { format } from 'date-fns'
import HeartButton from '../HeartButton/HeartButton'

import * as Styled from './ListingCard.styles'

interface ListingCardProps {
  data: SafeListing
  reservation?: SafeReservation
  onAction?: (id: string) => void
  disabled?: boolean
  actionLabel?: string
  actionId?: string
  currentUser?: SafeUser | null
}

const ListingCard: React.FC<ListingCardProps> = ({
  data,
  reservation,
  onAction,
  disabled,
  actionLabel,
  actionId = '',
  currentUser,
}) => {
  const router = useRouter()
  const { getByValue } = useCountries()

  const location = getByValue(data.locationValue)

  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation()

      if (disabled) {
        return
      }

      onAction?.(actionId)
    },
    [disabled, onAction, actionId],
  )

  const price = useMemo(() => {
    if (reservation) {
      return reservation.totalPrice
    }

    return data.price
  }, [reservation, data.price])

  const reservationDate = useMemo(() => {
    if (!reservation) {
      return null
    }

    const start = new Date(reservation.startDate)
    const end = new Date(reservation.endDate)

    return `${format(start, 'PP')} - ${format(end, 'PP')}`
  }, [reservation])

  return (
    <Styled.Wrapper
      className="group"
      onClick={() => router.push(`/listings/${data.id}`)}
    >
      <Styled.Content>
        <Styled.ImageWrapper>
          <Styled.ListingImage fill src={data.imageSrc} alt="Listing" />
          <Styled.IconWrapper>
            <HeartButton listingId={data.id} currentUser={currentUser} />
          </Styled.IconWrapper>
        </Styled.ImageWrapper>
        <Styled.LocationWrapper>
          {location?.region}, {location?.label}
        </Styled.LocationWrapper>
        <Styled.ReservationDate>
          {reservationDate || data.category}
        </Styled.ReservationDate>
        <Styled.PriceWrapper>
          <Styled.Price>$ {price}</Styled.Price>
          {!reservation && <Styled.PerNight>night</Styled.PerNight>}
        </Styled.PriceWrapper>
        {onAction && actionLabel && (
          <Button
            disabled={disabled}
            small
            label={actionLabel}
            onClick={handleCancel}
          />
        )}
      </Styled.Content>
    </Styled.Wrapper>
  )
}

export default ListingCard
