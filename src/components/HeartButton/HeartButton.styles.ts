import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import tw, { styled } from 'twin.macro'

export const Wrapper = tw.div`
	relative
	hover:opacity-80
	transition
	cursor-pointer
`

export const HeartIcon = tw(AiOutlineHeart)`
	fill-white
	absolute
	-top-[2px]
	-right-[2px]
`

export const FilledHeartIcon = styled(AiFillHeart)<{ hasFavorited?: boolean }>(
  ({ hasFavorited }) => [
    hasFavorited ? tw`fill-rose-500` : tw`fill-neutral-500/70`,
  ],
)
