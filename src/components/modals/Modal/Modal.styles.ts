import tw, { styled } from 'twin.macro'

export const Wrapper = tw.div`
justify-center 
items-center 
flex 
overflow-x-hidden 
overflow-y-auto 
fixed 
inset-0 
z-50 
outline-none 
focus:outline-none
bg-neutral-800/70
`

export const Content = tw.div`
relative 
w-full
md:w-4/6
lg:w-3/6
xl:w-2/5
my-6
mx-auto 
h-full 
lg:h-auto
md:h-auto
`

export const Box = styled.div<{ showModal: boolean }>(({ showModal }) => [
  tw`
		duration-300
		h-full
	`,
  showModal ? tw`translate-y-0 opacity-100` : tw`translate-y-full opacity-0`,
])

export const Header = tw.header`
	h-full
	lg:h-auto
	md:h-auto
	border-0 
	rounded-lg 
	shadow-lg 
	relative 
	flex 
	flex-col 
	w-full 
	bg-white 
	outline-none 
	focus:outline-none
`

export const HeaderContent = tw.div`
	flex 
	items-center 
	p-6
	rounded-t
	justify-center
	relative
	border-b-[1px]
`

export const Button = tw.button`
	p-1
	border-0 
	hover:opacity-70
	transition
	absolute
	left-9
`

export const Title = tw.div`text-lg font-semibold`

export const Body = tw.div`relative p-6 flex-auto`

export const Footer = tw.footer`flex flex-col gap-2 p-6`

export const FooterContent = tw.div`
	flex 
	flex-row 
	items-center 
	gap-4 
	w-full
`
