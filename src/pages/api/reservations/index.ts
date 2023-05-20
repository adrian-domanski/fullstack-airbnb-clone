import prisma from '../../../libs/prismadb'
import { NextApiRequest, NextApiResponse } from 'next'
import getCurrentUser from '../../../actions/getCurrentUser'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const currentUser = await getCurrentUser(req, res)

    if (!currentUser) {
      return res.status(401).json({ message: 'Unauthorized' })
    }

    const body = await req.body
    const { listingId, startDate, endDate, totalPrice } = body

    if (!listingId || !startDate || !endDate || !totalPrice) {
      return res.status(400).json({ message: 'Invalid data provided' })
    }

    const listingAndReservation = await prisma.listing.update({
      where: {
        id: listingId,
      },
      data: {
        reservations: {
          create: {
            userId: currentUser.id,
            startDate,
            endDate,
            totalPrice,
          },
        },
      },
    })

    return res.json(listingAndReservation)
  }
}
