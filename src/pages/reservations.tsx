import { GetServerSideProps, NextApiRequest, NextApiResponse } from 'next'
import { SafeReservation, SafeUser } from '../../types/typings'
import getReservations from '../actions/getReservations'
import getCurrentUser from '../actions/getCurrentUser'
import EmptyState from '../EmptyState/EmptyState'
import Layout from '../components/Layout/Layout'
import ReservationsClient from '../containers/ReservationsClient/ReservationsClient'

interface ReservationsPageProps {
  currentUser: SafeUser | null
  reservations: SafeReservation[]
}

const ReservationsPage = ({
  currentUser,
  reservations,
}: ReservationsPageProps) => {
  return (
    <Layout currentUser={currentUser}>
      {!currentUser ? (
        <EmptyState title="Unauthorized" subtitle="Please login" />
      ) : reservations.length === 0 ? (
        <EmptyState
          title="No reservations found"
          subtitle="Looks like you have no reservations on your properties."
        />
      ) : (
        <ReservationsClient
          reservations={reservations}
          currentUser={currentUser}
        />
      )}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<
  ReservationsPageProps
> = async ctx => {
  const currentUser: SafeUser | null = await getCurrentUser(
    ctx.req as NextApiRequest,
    ctx.res as NextApiResponse,
  )

  if (!currentUser) {
    throw new Error('No user found')
  }

  const reservations = (await getReservations({
    authorId: currentUser.id,
  })) as SafeReservation[]

  return {
    props: {
      currentUser,
      reservations,
    },
  }
}

export default ReservationsPage
