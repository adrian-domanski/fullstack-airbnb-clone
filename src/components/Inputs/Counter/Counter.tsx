import { useCallback } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

import * as Styled from './Counter.styles'

interface CounterProps {
  title: string
  subtitle: string
  value: number
  onChange: (value: number) => void
}

const Counter: React.FC<CounterProps> = ({
  title,
  subtitle,
  value,
  onChange,
}) => {
  const onAdd = useCallback(() => {
    onChange(value + 1)
  }, [onChange, value])

  const onReduce = useCallback(() => {
    if (value === 1) {
      return
    }

    onChange(value - 1)
  }, [onChange, value])

  return (
    <Styled.Wrapper>
      <Styled.Header>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Subtitle>{subtitle}</Styled.Subtitle>
      </Styled.Header>
      <Styled.Content>
        <Styled.Box onClick={onReduce}>
          <AiOutlineMinus />
        </Styled.Box>
        <Styled.Value>{value}</Styled.Value>
        <Styled.Icon onClick={onAdd}>
          <AiOutlinePlus />
        </Styled.Icon>
      </Styled.Content>
    </Styled.Wrapper>
  )
}

export default Counter
