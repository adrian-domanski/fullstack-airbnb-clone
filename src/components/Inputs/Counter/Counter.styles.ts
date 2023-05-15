import tw from 'twin.macro'

export const Wrapper = tw.div`flex flex-row items-center justify-between`

export const Header = tw.div`flex flex-col`

export const Title = tw.div`font-medium`

export const Subtitle = tw.div`font-light text-gray-600`

export const Content = tw.div`flex flex-row items-center gap-4`

export const Box = tw.div`
	w-10
	h-10
	rounded-full
	border-[1px]
	border-neutral-400
	flex
	items-center
	justify-center
	text-neutral-600
	cursor-pointer
	hover:opacity-80
	transition
`

export const Value = tw.div`
	font-light 
	text-xl 
	text-neutral-600
`

export const Icon = tw.div`
	w-10
	h-10
	rounded-full
	border-[1px]
	border-neutral-400
	flex
	items-center
	justify-center
	text-neutral-600
	cursor-pointer
	hover:opacity-80
	transition
`
