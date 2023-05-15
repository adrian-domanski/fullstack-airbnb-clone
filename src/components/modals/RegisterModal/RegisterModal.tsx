import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import { AiFillGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import useRegisterModal from '../../../hooks/useRegisterModal'
import { FieldValues, useForm } from 'react-hook-form'
import axios from 'axios'
import Heading from '../../Heading/Heading'
import Input from '../../Inputs/Input/Input'
import { toast } from 'react-hot-toast'
import Button from '../../Button/Button'
import { signIn } from 'next-auth/react'
import useLoginModal from '../../../hooks/useLoginModal'

import * as Styled from './RegisterModal.styles'

const RegisterModal = () => {
  const loginModal = useLoginModal()
  const registerModal = useRegisterModal()

  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  const onSubmit = async (data: FieldValues) => {
    setIsLoading(true)

    axios
      .post('/api/register', data)
      .then(() => {
        registerModal.onClose()
      })
      .catch(() => {
        toast.error('Someting went wrong!')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const toggle = () => {
    registerModal.onClose()
    loginModal.onOpen()
  }

  const modalBodyContent = (
    <Styled.BodyContainer>
      <Heading title="Welcome to Airbnb" subtitle="Create an account" />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        type="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </Styled.BodyContainer>
  )

  const footerContent = (
    <Styled.FooterContainer>
      <hr />
      <Button
        outline
        label="Continue with Google"
        icon={<FcGoogle />}
        onClick={() => signIn('google')}
      />
      <Button
        outline
        label="Continue with Github"
        icon={<AiFillGithub />}
        onClick={() => signIn('github')}
      />
      <Styled.CTAWrapper>
        <div>Already have an account?</div>
        <Styled.CTALogin onClick={toggle}>Log in</Styled.CTALogin>
      </Styled.CTAWrapper>
    </Styled.FooterContainer>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={modalBodyContent}
      footer={footerContent}
    />
  )
}

export default RegisterModal
