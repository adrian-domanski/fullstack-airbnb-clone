import prisma from '../../../libs/prismadb'
import { NextApiRequest, NextApiResponse } from 'next'
import getCurrentUser from '../../../actions/getCurrentUser'

interface IParams {
  reservationId?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'DELETE') {
    const params = req.query as IParams
    const currentUser = await getCurrentUser(req, res)

    if (!currentUser) {
      return res.status(401).json({ message: 'Unauthorized' })
    }

    const { reservationId } = params

    if (!reservationId || typeof reservationId !== 'string') {
      return res.status(400).json({ message: 'Invalid reservationId' })
    }

    const reservation = await prisma.reservation.deleteMany({
      where: {
        id: reservationId,
        OR: [
          {
            userId: currentUser.id,
          },
          {
            listing: {
              userId: currentUser.id,
            },
          },
        ],
      },
    })

    return res.json(reservation)
  }
}
