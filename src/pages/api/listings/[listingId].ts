import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../libs/prismadb'
import getCurrentUser from '../../../actions/getCurrentUser'

interface IParams {
  listingId?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'DELETE') {
    const params = req.query as IParams
    const { listingId } = params

    if (!listingId || typeof listingId !== 'string') {
      return res.status(400).json({ message: 'Invalid listingId' })
    }

    const currentUser = await getCurrentUser(req, res)
    if (!currentUser) {
      return res.status(401).json({ message: 'Unauthorized' })
    }

    const listing = await prisma.listing.deleteMany({
      where: {
        id: listingId,
        userId: currentUser.id,
      },
    })

    return res.json(listing)
  }
}
