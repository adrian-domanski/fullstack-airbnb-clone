import tw from 'twin.macro'

export const Wrapper = tw.div`
	border-[1px] 
	w-full 
	md:w-auto 
	py-2 
	rounded-full 
	shadow-sm 
	hover:shadow-md 
	transition 
	cursor-pointer
`

export const Content = tw.div`
	flex 
	flex-row 
	items-center 
	justify-between
`

export const LocationLabel = tw.div`
	text-sm 
	font-semibold 
	px-6
`

export const DurationLabel = tw.div`
	hidden 
	sm:block 
	text-sm 
	font-semibold 
	px-6 
	border-x-[1px] 
	flex-1 
	text-center
`

export const GuestLabelWrapper = tw.div`
	text-sm 
	pl-6 
	pr-2 
	text-gray-600 
	flex 
	flex-row 
	items-center 
	gap-3
`
export const SearchWrapper = tw.div`
	p-2 
	bg-rose-500 
	rounded-full 
	text-white
`
export const GuestLabel = tw.div`
	text-sm 
	pl-6 
	pr-2 
	text-gray-600 
	flex 
	flex-row 
	items-center 
	gap-3
`
