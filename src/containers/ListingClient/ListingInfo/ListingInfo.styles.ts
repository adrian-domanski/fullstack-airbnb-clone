import tw from 'twin.macro'

export const Wrapper = tw.div`col-span-4 flex flex-col gap-8`

export const Content = tw.div`flex flex-col gap-2`

export const UserWrapper = tw.div`
	text-xl 
	font-semibold 
	flex 
	flex-row 
	items-center
	gap-2
`

export const Details = tw.div`
	flex 
	flex-row 
	items-center 
	gap-4 
	font-light
	text-neutral-500
`

export const Description = tw.div`
text-lg font-light text-neutral-500`
