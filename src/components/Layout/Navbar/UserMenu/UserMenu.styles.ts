import tw from 'twin.macro'

export const Wrapper = tw.div`relative`

export const Content = tw.div`flex flex-row items-center gap-3`

export const LogoWrapper = tw.div`
	hidden
	md:block
	text-sm 
	font-semibold 
	py-3 
	px-4 
	rounded-full 
	hover:bg-neutral-100 
	transition 
	cursor-pointer
`

export const ToggleWrapper = tw.div`
	p-4
	md:py-1
	md:px-2
	border-[1px] 
	border-neutral-200 
	flex 
	flex-row 
	items-center 
	gap-3 
	rounded-full 
	cursor-pointer 
	hover:shadow-md 
	transition
`

export const UserImageWrapper = tw.div`hidden md:block`

export const MenuWrapper = tw.div`
	absolute 
	rounded-xl 
	shadow-md
	w-[40vw]
	md:w-3/4 
	bg-white 
	overflow-hidden 
	right-0 
	top-12 
	text-sm
`

export const MenuContent = tw.div`
	flex
	flex-col
	cursor-pointer
 `
