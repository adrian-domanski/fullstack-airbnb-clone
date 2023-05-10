import { BiDollar } from 'react-icons/bi'
import tw, { styled } from 'twin.macro'

export const Wrapper = tw.div`w-full relative`

export const DollarIcon = tw(BiDollar)`
	text-neutral-700
	absolute
	top-5
	left-2
`

export const Input = styled.input<{
  formatPrice?: boolean
  hasError?: boolean
}>(({ formatPrice, hasError }) => [
  tw`
		w-full
		p-4
		pt-6 
		font-light 
		bg-white 
		border-2
		rounded-md
		outline-none
		transition
		disabled:opacity-70
		disabled:cursor-not-allowed
	`,
  formatPrice ? tw`pl-9` : tw`pl-4`,
  hasError
    ? tw`border-rose-500 focus:border-rose-500`
    : tw`border-neutral-300 focus:border-black`,
])

export const Label = styled.div<{
  formatPrice?: boolean
  hasError?: boolean
}>(({ hasError, formatPrice }) => [
  tw`
		absolute 
		text-base
		duration-150 
		transform 
		-translate-y-3 
		top-5 
		z-10 
		origin-[0] 
		peer-placeholder-shown:scale-100 
		peer-placeholder-shown:translate-y-0 
		peer-focus:scale-75
		peer-focus:-translate-y-4
	`,
  formatPrice ? tw`left-9` : tw`left-4`,
  hasError ? tw`text-rose-500` : tw`text-zinc-400`,
])
