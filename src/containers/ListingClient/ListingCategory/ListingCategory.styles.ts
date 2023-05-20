import tw, { styled } from 'twin.macro'

export const Wrapper = tw.div`flex flex-col gap-6`

export const Content = tw.div`flex flex-row items-center gap-4`

export const IconWrapper = styled.div`
  svg {
    ${tw`text-neutral-600`}
  }
`

export const DescriptionWrapper = tw.div`flex flex-col`

export const Label = tw.div`text-lg font-semibold`

export const Description = tw.div`text-neutral-500 font-light`
