import tw from 'twin.macro'
import Image from 'next/image'

export const Content = tw.div`
	w-full
	h-[60vh]
	overflow-hidden 
	rounded-xl
	relative
`

export const ReservationImage = tw(Image)`object-cover w-full`

export const IconWrapper = tw.div`
	absolute
	top-5
	right-5
`
