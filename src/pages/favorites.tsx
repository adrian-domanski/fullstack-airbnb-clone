import React from 'react'
import EmptyState from '../EmptyState/EmptyState'
import { SafeListing, SafeUser } from '../../types/typings'
import FavoritesClient from '../containers/FavoritesClient/FavoritesClient'
import { GetServerSideProps, NextApiRequest, NextApiResponse } from 'next'
import getCurrentUser from '../actions/getCurrentUser'
import getFavoriteListings from '../actions/getFavoriteListings'
import Layout from '../components/Layout/Layout'

interface FavoritesPageProps {
  currentUser: SafeUser | null
  listings: SafeListing[]
}

const FavoritesPage = ({ currentUser, listings }: FavoritesPageProps) => {
  return (
    <Layout currentUser={currentUser}>
      {listings.length === 0 ? (
        <EmptyState
          title="No favorites found"
          subtitle="Looks like you have no favorite listings."
        />
      ) : (
        <FavoritesClient listings={listings} currentUser={currentUser} />
      )}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<
  FavoritesPageProps
> = async ctx => {
  const currentUser: SafeUser | null = await getCurrentUser(
    ctx.req as NextApiRequest,
    ctx.res as NextApiResponse,
  )

  const listings: SafeListing[] = await getFavoriteListings(
    ctx.req as NextApiRequest,
    ctx.res as NextApiResponse,
  )

  return {
    props: {
      currentUser,
      listings,
    },
  }
}

export default FavoritesPage
