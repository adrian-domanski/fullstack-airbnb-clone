import dynamic from 'next/dynamic'
import { IconType } from 'react-icons'
import { SafeUser } from '../../../../types/typings'
import Avatar from '../../../components/Layout/Navbar/Avatar/Avatar'
import useCountries from '../../../hooks/useCountries'
import ListingCategory from '../ListingCategory/ListingCategory'

import * as Styled from './ListingInfo.styles'

const Map = dynamic(() => import('../../../components/Map/Map'), {
  ssr: false,
})

interface ListingInfoProps {
  user: SafeUser
  description: string
  guestCount: number
  roomCount: number
  bathroomCount: number
  category:
    | {
        icon: IconType
        label: string
        description: string
      }
    | undefined
  locationValue: string
}

const ListingInfo: React.FC<ListingInfoProps> = ({
  user,
  description,
  guestCount,
  roomCount,
  bathroomCount,
  category,
  locationValue,
}) => {
  const { getByValue } = useCountries()

  const coordinates = getByValue(locationValue)?.latlng

  return (
    <Styled.Wrapper>
      <Styled.Content>
        <Styled.UserWrapper>
          <div>Hosted by {user?.name}</div>
          <Avatar src={user?.image} />
        </Styled.UserWrapper>
        <Styled.Details>
          <div>{guestCount} guests</div>
          <div>{roomCount} rooms</div>
          <div>{bathroomCount} bathrooms</div>
        </Styled.Details>
      </Styled.Content>
      <hr />
      {category && (
        <ListingCategory
          icon={category.icon}
          label={category?.label}
          description={category?.description}
        />
      )}
      <hr />
      <Styled.Description>{description}</Styled.Description>
      <hr />
      <Map center={coordinates} />
    </Styled.Wrapper>
  )
}

export default ListingInfo
