import qs from 'query-string'
import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'
import { IconType } from 'react-icons'

import * as Styled from './CategoryBox.styles'

interface CategoryBoxProps {
  icon: IconType
  label: string
  selected?: boolean
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  icon: Icon,
  label,
  selected,
}) => {
  const router = useRouter()
  const params = useSearchParams()

  const handleClick = useCallback(() => {
    let currentQuery = {}

    if (params) {
      currentQuery = qs.parse(params.toString())
    }

    const updatedQuery: any = {
      ...currentQuery,
      category: label,
    }

    if (params?.get('category') === label) {
      delete updatedQuery.category
    }

    const url = qs.stringifyUrl(
      {
        url: '/',
        query: updatedQuery,
      },
      { skipNull: true },
    )

    router.push(url)
  }, [label, router, params])

  return (
    <Styled.Wrapper isSelected={selected} onClick={handleClick}>
      <Icon size={26} />
      <Styled.Label>{label}</Styled.Label>
    </Styled.Wrapper>
  )
}

export default CategoryBox
