import tw from 'twin.macro'

export const Wrapper = tw.div`
	relative
	cursor-pointer
	hover:opacity-70
	transition
	border-dashed 
	border-2 
	p-20 
	border-neutral-300
	flex
	flex-col
	justify-center
	items-center
	gap-4
	text-neutral-600
`

export const ImageWrapper = tw.div`absolute inset-0 w-full h-full`

export const Upload = tw.div`font-semibold text-lg`
