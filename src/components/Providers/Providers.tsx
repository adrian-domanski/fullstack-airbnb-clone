import React from 'react'
import RegisterModal from '../modals/RegisterModal/RegisterModal'
import LoginModal from '../modals/LoginModal/LoginModal'
import RentModal from '../modals/RentModal/RentModal'
import SearchModal from '../modals/SearchModal/SearchModal'

const Providers = () => {
  return (
    <>
      <RegisterModal />
      <LoginModal />
      <RentModal />
      <SearchModal />
    </>
  )
}

export default Providers
