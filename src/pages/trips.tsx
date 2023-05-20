import { GetServerSideProps, NextApiRequest, NextApiResponse } from 'next'
import EmptyState from '../EmptyState/EmptyState'
import TripsClient from '../containers/TripsClient/TripsClient'
import { SafeReservation, SafeUser } from '../../types/typings'
import getCurrentUser from '../actions/getCurrentUser'
import getReservations from '../actions/getReservations'
import Layout from '../components/Layout/Layout'

interface TripsPageProps {
  currentUser: SafeUser | null
  reservations: SafeReservation[]
}

const TripsPage = ({
  currentUser = null,
  reservations = [],
}: TripsPageProps) => {
  return (
    <Layout currentUser={currentUser}>
      {!currentUser ? (
        <EmptyState title="Unauthorized" subtitle="Please login" />
      ) : reservations.length === 0 ? (
        <EmptyState
          title="No trips found"
          subtitle="Looks like you havent reserved any trips."
        />
      ) : (
        <TripsClient reservations={reservations} currentUser={currentUser} />
      )}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<
  TripsPageProps
> = async ctx => {
  const currentUser: SafeUser | null = await getCurrentUser(
    ctx.req as NextApiRequest,
    ctx.res as NextApiResponse,
  )

  if (!currentUser) {
    throw new Error('No user found')
  }

  const reservations = (await getReservations({
    userId: currentUser.id,
  })) as SafeReservation[]

  return {
    props: {
      currentUser,
      reservations,
    },
  }
}

export default TripsPage
