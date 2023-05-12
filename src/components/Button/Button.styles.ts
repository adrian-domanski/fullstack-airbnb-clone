import tw, { styled } from 'twin.macro'

export const Wrapper = styled.button<{ outline?: boolean; small?: boolean }>(
  ({ small, outline }) => [
    tw`
			relative
			disabled:opacity-70
			disabled:cursor-not-allowed
			rounded-lg
			hover:opacity-80
			transition
			w-full
		`,
    outline
      ? tw`bg-white border-black text-black`
      : tw`bg-rose-500 border-rose-500 text-white`,
    small
      ? tw`text-sm py-1 font-light border-[1px]`
      : tw`text-base py-3 font-semibold border-2`,
  ],
)

export const IconWrapper = styled.div`
  svg {
    ${tw`absolute left-4 top-4`}
  }
`
