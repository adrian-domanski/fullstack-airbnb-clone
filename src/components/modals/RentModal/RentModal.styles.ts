import tw from 'twin.macro'

export const BodyContent = tw.div`flex flex-col gap-8`

export const CategoriesWrapper = tw.div`
	grid 
	grid-cols-1 
	md:grid-cols-2 
	gap-3
	max-h-[50vh]
	overflow-y-auto
`

export const CategoryInputWrapper = tw.div`col-span-1`
