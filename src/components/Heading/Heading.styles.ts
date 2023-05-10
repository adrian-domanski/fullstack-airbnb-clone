import tw, { styled } from 'twin.macro'

export const Wrapper = styled.div<{ center?: boolean }>(({ center }) => [
  center ? tw`text-center` : tw`text-start`,
])

export const Content = tw.div`text-2xl font-bold`

export const Subtitle = tw.div`font-light text-neutral-500 my-2`
