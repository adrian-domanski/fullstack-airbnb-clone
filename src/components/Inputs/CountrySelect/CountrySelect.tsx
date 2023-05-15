import Select from 'react-select'
import useCountries from '../../../hooks/useCountries'

import * as Styled from './CountrySelect.styles'

export type CountrySelectValue = {
  flag: string
  label: string
  latlng: number[]
  region: string
  value: string
}

interface CountrySelectProps {
  value?: CountrySelectValue
  onChange: (value: CountrySelectValue) => void
}

const CountrySelect: React.FC<CountrySelectProps> = ({ value, onChange }) => {
  const { getAll } = useCountries()

  return (
    <Styled.SelectWrapper>
      <Select
        placeholder="Anywhere"
        isClearable
        options={getAll()}
        value={value}
        onChange={value => onChange(value as CountrySelectValue)}
        formatOptionLabel={(option: any) => (
          <Styled.FlagWrapper>
            <div>{option.flag}</div>
            <div>
              {option.label},<Styled.Region>{option.region}</Styled.Region>
            </div>
          </Styled.FlagWrapper>
        )}
        classNames={{
          control: () => 'control',
          input: () => 'input',
          option: () => 'option',
        }}
        theme={theme => ({
          ...theme,
          borderRadius: 6,
          colors: {
            ...theme.colors,
            primary: 'black',
            primary25: '#ffe4e6',
          },
        })}
      />
    </Styled.SelectWrapper>
  )
}

export default CountrySelect
