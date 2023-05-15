import tw, { styled } from 'twin.macro'

export const FlagWrapper = tw.div`flex flex-row items-center gap-3`

export const Region = tw.span`text-neutral-500 ml-1`

export const SelectWrapper = styled.div`
  .control {
    ${tw`p-3 border-2`}
  }

  .input {
    ${tw`text-lg`}
  }

  .option {
    ${tw`text-lg cursor-pointer`}
  }
`
