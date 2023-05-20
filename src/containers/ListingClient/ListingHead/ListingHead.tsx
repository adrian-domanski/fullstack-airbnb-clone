import { SafeUser } from '../../../../types/typings'
import Heading from '../../../components/Heading/Heading'
import HeartButton from '../../../components/HeartButton/HeartButton'
import useCountries from '../../../hooks/useCountries'

import * as Styled from './ListingHead.styles'

interface ListingHeadProps {
  title: string
  locationValue: string
  imageSrc: string
  id: string
  currentUser?: SafeUser | null
}

const ListingHead: React.FC<ListingHeadProps> = ({
  title,
  locationValue,
  imageSrc,
  id,
  currentUser,
}) => {
  const { getByValue } = useCountries()

  const location = getByValue(locationValue)

  return (
    <>
      <Heading
        title={title}
        subtitle={`${location?.region}, ${location?.label}`}
      />
      <Styled.Content>
        <Styled.ReservationImage src={imageSrc} fill alt="Image" />
        <Styled.IconWrapper>
          <HeartButton listingId={id} currentUser={currentUser} />
        </Styled.IconWrapper>
      </Styled.Content>
    </>
  )
}

export default ListingHead
