import { GetServerSideProps, NextApiRequest, NextApiResponse } from 'next'
import EmptyState from '../../EmptyState/EmptyState'
import { SafeListing, SafeReservation, SafeUser } from '../../../types/typings'
import getCurrentUser from '../../actions/getCurrentUser'
import getReservations from '../../actions/getReservations'
import getListingById from '../../actions/getListingById'
import ListingClient from '../../containers/ListingClient/ListingClient'
import Layout from '../../components/Layout/Layout'

interface IParams {
  listingId?: string
}

interface ListingPageProps {
  currentUser: SafeUser | null
  reservations: SafeReservation[]
  listing:
    | (SafeListing & {
        user: SafeUser
      })
    | null
}

const ListingPage = ({
  currentUser,
  reservations,
  listing,
}: ListingPageProps) => {
  return (
    <Layout currentUser={currentUser}>
      {listing ? (
        <ListingClient
          listing={listing}
          reservations={reservations}
          currentUser={currentUser}
        />
      ) : (
        <EmptyState />
      )}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<
  ListingPageProps
> = async ctx => {
  const currentUser: SafeUser | null = await getCurrentUser(
    ctx.req as NextApiRequest,
    ctx.res as NextApiResponse,
  )

  const params = ctx.params as IParams

  if (!params?.listingId) {
    throw new Error('No listingId provided')
  }

  try {
    const reservations = (await getReservations(params)) as SafeReservation[]

    const listing = (await getListingById(params)) as SafeListing & {
      user: SafeUser
    }

    return {
      props: {
        currentUser,
        reservations,
        listing,
      },
    }
  } catch (error) {
    console.error(error)

    return {
      props: {
        currentUser,
        reservations: [],
        listing: null,
      },
    }
  }
}

export default ListingPage
