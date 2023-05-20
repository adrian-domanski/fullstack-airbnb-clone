import { Range } from 'react-date-range'
import Button from '../../../components/Button/Button'
import Calendar from '../../../components/Inputs/Calendar/Calendar'

import * as Styled from './ListingReservation.styles'

interface ListingReservationProps {
  price: number
  dateRange: Range
  totalPrice: number
  onChangeDate: (value: Range) => void
  onSubmit: () => void
  disabled?: boolean
  disabledDates: Date[]
}

const ListingReservation: React.FC<ListingReservationProps> = ({
  price,
  dateRange,
  totalPrice,
  onChangeDate,
  onSubmit,
  disabled,
  disabledDates,
}) => {
  return (
    <Styled.Wrapper>
      <Styled.Content>
        <Styled.Price>$ {price}</Styled.Price>
        <Styled.NightText>night</Styled.NightText>
      </Styled.Content>
      <hr />
      <Calendar
        value={dateRange}
        disabledDates={disabledDates}
        onChange={value => onChangeDate(value.selection)}
      />
      <hr />
      <Styled.ReservationBtnWrapper>
        <Button disabled={disabled} label="Reserve" onClick={onSubmit} />
      </Styled.ReservationBtnWrapper>
      <hr />
      <Styled.PriceWrapper>
        <div>Total</div>
        <div>$ {totalPrice}</div>
      </Styled.PriceWrapper>
    </Styled.Wrapper>
  )
}

export default ListingReservation
