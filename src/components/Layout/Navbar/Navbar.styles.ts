import tw from 'twin.macro'

export const Nav = tw.nav`fixed w-full bg-white z-10 shadow-sm`

export const Content = tw.div`py-4 border-b-[1px]`

export const ContainerContent = tw.div`
	flex
	flex-row
	items-center 
	justify-between
	gap-3
	md:gap-0
`
