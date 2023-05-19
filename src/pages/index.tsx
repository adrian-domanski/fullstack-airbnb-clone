import React from 'react'
import getCurrentUser from '../actions/getCurrentUser'
import { GetServerSideProps, NextApiRequest, NextApiResponse } from 'next'
import { SafeListing, SafeUser } from '../../types/typings'
import Layout from '../components/Layout/Layout'
import Listings from '../containers/Listings/Listings'
import getListings from '../actions/getListings'

interface HomePageProps {
  currentUser: SafeUser | null
  listings: SafeListing[]
}

export default function Home({ currentUser, listings }: HomePageProps) {
  return (
    <Layout currentUser={currentUser}>
      <Listings listings={listings} currentUser={currentUser} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<
  HomePageProps
> = async ctx => {
  const currentUser: SafeUser | null = await getCurrentUser(
    ctx.req as NextApiRequest,
    ctx.res as NextApiResponse,
  )

  const listings: SafeListing[] = await getListings()

  return {
    props: {
      currentUser,
      listings,
    },
  }
}
