import { BiSearch } from 'react-icons/bi'
import useSearchModal from '../../../../hooks/useSearchModal'
import { useSearchParams } from 'next/navigation'
import useCountries from '../../../../hooks/useCountries'
import { useMemo } from 'react'
import { differenceInDays } from 'date-fns'

import * as Styled from './Search.styles'

const Search = () => {
  const searchModal = useSearchModal()
  const params = useSearchParams()
  const { getByValue } = useCountries()

  const locationValue = params?.get('locationValue')
  const startDate = params?.get('startDate')
  const endDate = params?.get('endDate')
  const guestCount = params?.get('guestCount')

  const locationLabel = useMemo(() => {
    if (locationValue) {
      return getByValue(locationValue as string)?.label
    }

    return 'Anywhere'
  }, [locationValue, getByValue])

  const durationLabel = useMemo(() => {
    if (startDate && endDate) {
      const start = new Date(startDate as string)
      const end = new Date(endDate as string)
      let diff = differenceInDays(end, start)

      if (diff === 0) {
        diff = 1
      }

      return `${diff} Days`
    }

    return 'Any Week'
  }, [startDate, endDate])

  const guestLabel = useMemo(() => {
    if (guestCount) {
      return `${guestCount} Guests`
    }

    return 'Add Guests'
  }, [guestCount])

  return (
    <Styled.Wrapper onClick={searchModal.onOpen}>
      <Styled.Content>
        <Styled.LocationLabel>{locationLabel}</Styled.LocationLabel>
        <Styled.DurationLabel>{durationLabel}</Styled.DurationLabel>
        <Styled.GuestLabelWrapper>
          <Styled.GuestLabel>{guestLabel}</Styled.GuestLabel>
          <Styled.SearchWrapper>
            <BiSearch size={18} />
          </Styled.SearchWrapper>
        </Styled.GuestLabelWrapper>
      </Styled.Content>
    </Styled.Wrapper>
  )
}

export default Search
