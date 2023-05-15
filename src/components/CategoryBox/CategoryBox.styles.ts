import tw, { styled } from 'twin.macro'

export const Wrapper = styled.div<{ isSelected?: boolean }>(
  ({ isSelected }) => [
    tw`
		flex 
		flex-col 
		items-center 
		justify-center 
		gap-2
		p-3
		border-b-2
		hover:text-neutral-800
		transition
		cursor-pointer
	`,
    isSelected
      ? tw`border-b-neutral-800 text-neutral-800`
      : tw`border-transparent text-neutral-500`,
  ],
)

export const Label = tw.div`font-medium text-sm`
