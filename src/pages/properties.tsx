import { GetServerSideProps, NextApiRequest, NextApiResponse } from 'next'
import { SafeListing, SafeUser } from '../../types/typings'
import EmptyState from '../EmptyState/EmptyState'
import Layout from '../components/Layout/Layout'
import PropertiesClient from '../containers/PropertiesClient/PropertiesClient'
import getCurrentUser from '../actions/getCurrentUser'
import getListings from '../actions/getListings'

interface PropertiesPageProps {
  currentUser: SafeUser | null
  listings: SafeListing[]
}

const PropertiesPage = ({
  currentUser = null,
  listings = [],
}: PropertiesPageProps) => {
  return (
    <Layout currentUser={currentUser}>
      {!currentUser ? (
        <EmptyState title="Unauthorized" subtitle="Please login" />
      ) : listings.length === 0 ? (
        <EmptyState
          title="No properties found"
          subtitle="Looks like you have no properties."
        />
      ) : (
        <PropertiesClient listings={listings} currentUser={currentUser} />
      )}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<
  PropertiesPageProps
> = async ctx => {
  let currentUser: SafeUser | null = await getCurrentUser(
    ctx.req as NextApiRequest,
    ctx.res as NextApiResponse,
  )

  if (!currentUser) {
    throw new Error('No user found')
  }

  const listings =
    currentUser &&
    ((await getListings({
      userId: currentUser.id,
    })) as SafeListing[])

  return {
    props: {
      currentUser,
      listings,
    },
  }
}

export default PropertiesPage
