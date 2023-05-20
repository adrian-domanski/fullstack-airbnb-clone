import tw from 'twin.macro'

export const Wrapper = tw.div`
	max-w-screen-lg 
	mx-auto
	pt-28
	pb-10
`

export const Content = tw.div`flex flex-col gap-6`

export const GridWrapper = tw.div`
	grid 
	grid-cols-1 
	md:grid-cols-7 
	md:gap-10 
	mt-6
`

export const ReservationsWrapper = tw.div`
	order-first 
	mb-10 
	md:order-last 
	md:col-span-3
`
