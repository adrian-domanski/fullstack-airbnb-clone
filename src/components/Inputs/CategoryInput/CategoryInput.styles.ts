import tw, { styled } from 'twin.macro'

export const Wrapper = styled.div<{ isSelected?: boolean }>(
  ({ isSelected }) => [
    tw`
		rounded-xl
		border-2
		p-4
		flex
		flex-col
		gap-3
		hover:border-black
		transition
		cursor-pointer
	`,
    isSelected ? tw`border-black` : tw`border-neutral-200`,
  ],
)

export const Label = tw.div`font-semibold`
