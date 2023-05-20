import prisma from '../../../libs/prismadb'
import { NextApiRequest, NextApiResponse } from 'next'
import getCurrentUser from '../../../actions/getCurrentUser'
import { type } from 'os'

interface IParams {
  listingId?: string
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

    const { listingId } = params

    if (!listingId || typeof listingId !== 'string') {
      return res.status(400).json({ message: 'Invalid listingId' })
    }

    let favoriteIds = [...(currentUser.favoriteIds || [])]

    favoriteIds = favoriteIds.filter(id => id !== listingId)

    const user = await prisma.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        favoriteIds,
      },
    })

    return res.json(user)
  }

  if (req.method === 'POST') {
    const params = req.query as IParams
    const body = await req.body
    const { email, name, password } = body

    const currentUser = await getCurrentUser(req, res)

    if (!currentUser) {
      return res.status(401).json({ message: 'Unauthorized' })
    }

    const { listingId } = params

    if (!listingId || typeof listingId !== 'string') {
      return res.status(400).json({ message: 'Invalid listingId' })
    }

    let favoriteIds = [...(currentUser.favoriteIds || [])]

    favoriteIds.push(listingId)

    const user = await prisma.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        favoriteIds,
      },
    })

    return res.json(user)
  }
}
