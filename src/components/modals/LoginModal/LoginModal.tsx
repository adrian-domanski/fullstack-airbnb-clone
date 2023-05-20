import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import { AiFillGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import useRegisterModal from '../../../hooks/useRegisterModal'
import useLoginModal from '../../../hooks/useLoginModal'
import { FieldValues, useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import Heading from '../../Heading/Heading'
import Input from '../../Inputs/Input/Input'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/router'
import Button from '../../Button/Button'

import * as Styled from './LoginModal.styles'

const LoginModal = () => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const registerModal = useRegisterModal()
  const loginModal = useLoginModal()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = async (data: FieldValues) => {
    setIsLoading(true)

    signIn('credentials', {
      ...data,
      redirect: false,
    }).then(callback => {
      setIsLoading(false)

      if (callback?.ok) {
        toast.success('Logged in successfully!')
        loginModal.onClose()
        router.push(router.asPath)
      }

      if (callback?.error) {
        toast.error(callback.error)
      }
    })
  }
  const toggle = () => {
    loginModal.onClose()
    registerModal.onOpen()
  }

  const modalBodyContent = (
    <Styled.BodyContainer>
      <Heading title="Welcome back" subtitle="Login to your account!" />
      <Input
        id="email"
        label="Email"
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
        <div>Fist time using Airbnb?</div>
        <Styled.CTALogin onClick={toggle}>Create an account</Styled.CTALogin>
      </Styled.CTAWrapper>
    </Styled.FooterContainer>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Continue"
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={modalBodyContent}
      footer={footerContent}
    />
  )
}

export default LoginModal
