import { useRouter } from 'next/navigation'
import Heading from '../components/Heading/Heading'
import Button from '../components/Button/Button'

import * as Styled from './EmptyState.styles'

interface EmptyStateProps {
  title?: string
  subtitle?: string
  showReset?: boolean
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title = 'No exact matches',
  subtitle = 'Try changing or removing some of your filters.',
  showReset,
}) => {
  const router = useRouter()

  return (
    <Styled.Wrapper>
      <Heading center title={title} subtitle={subtitle} />
      <Styled.CTAWrapper>
        {showReset && (
          <Button
            outline
            label="Remove all filters"
            onClick={() => router.push('/')}
          />
        )}
      </Styled.CTAWrapper>
    </Styled.Wrapper>
  )
}

export default EmptyState
