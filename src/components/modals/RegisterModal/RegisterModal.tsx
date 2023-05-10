import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import { AiFillGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import useRegisterModal from '../../../hooks/useRegisterModal'
import { FieldValues, useForm } from 'react-hook-form'
import axios from 'axios'
import Heading from '../../Heading/Heading'
import Input from '../../Inputs/Input/Input'

const RegisterModal = () => {
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
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const modalBodyContent = (
    <div tw="flex flex-col gap-4">
      <Heading title="Welcome to Airbnb" subtitle="Create an account" />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
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
    />
  )
}

export default RegisterModal
