import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import RegisterModal from '../components/modals/RegisterModal/RegisterModal'
import LoginModal from '../components/modals/LoginModal/LoginModal'
import getCurrentUser from '../actions/getCurrentUser'
import { GetServerSideProps, NextApiRequest, NextApiResponse } from 'next'
import { SafeUser } from '../../types/typings'
import RentModal from '../components/modals/RentModal/RentModal'

interface HomePageProps {
  currentUser: SafeUser | null
}

const HomePage: React.FC<HomePageProps> = ({ currentUser }) => {
  return (
    <>
      <Navbar currentUser={currentUser} />
      <RegisterModal />
      <LoginModal />
      <RentModal />
    </>
  )
}

export const getServerSideProps: GetServerSideProps<
  HomePageProps
> = async ctx => {
  const currentUser: SafeUser | null = await getCurrentUser(
    ctx.req as NextApiRequest,
    ctx.res as NextApiResponse,
  )

  return {
    props: {
      currentUser,
    },
  }
}

export default HomePage
