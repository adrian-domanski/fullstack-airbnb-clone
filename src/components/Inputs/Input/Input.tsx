import React from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

import * as Styled from './Input.styles'

interface InputProps {
  id: string
  label: string
  type?: string
  disabled?: boolean
  formatPrice?: boolean
  required?: boolean
  register: UseFormRegister<FieldValues>
  errors: FieldErrors
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = 'text',
  disabled,
  formatPrice,
  register,
  required,
  errors,
}) => {
  return (
    <Styled.Wrapper>
      {formatPrice && <Styled.DollarIcon size={24} />}
      <Styled.Input
        className="peer"
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        type={type}
        formatPrice={formatPrice}
        hasError={!!errors[id]}
      />
      <Styled.Label formatPrice={formatPrice} hasError={!!errors[id]}>
        {label}
      </Styled.Label>
    </Styled.Wrapper>
  )
}

export default Input
