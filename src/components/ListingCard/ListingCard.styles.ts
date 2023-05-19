import tw from 'twin.macro'
import Image from 'next/image'

export const Wrapper = tw.div`col-span-1 cursor-pointer`

export const Content = tw.div`flex flex-col gap-2 w-full`

export const ImageWrapper = tw.div`
	aspect-square 
	w-full 
	relative 
	overflow-hidden 
	rounded-xl
`

export const ListingImage = tw(Image)`
	object-cover 
	h-full 
	w-full 
	group-hover:scale-110 
	transition
`

export const IconWrapper = tw.div`
	absolute
	top-3
	right-3
`

export const LocationWrapper = tw.div`font-semibold text-lg`
export const ReservationDate = tw.div`font-light text-neutral-500`
export const PriceWrapper = tw.div`flex flex-row items-center gap-1`
export const Price = tw.div`font-semibold`
export const PerNight = tw.div`font-light`
