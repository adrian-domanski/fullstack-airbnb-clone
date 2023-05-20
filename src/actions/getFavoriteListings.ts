import prisma from '../libs/prismadb'
import getCurrentUser from './getCurrentUser'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function getFavoriteListings(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const currentUser = await getCurrentUser(req, res)

    if (!currentUser) {
      return []
    }

    const favorites = await prisma.listing.findMany({
      where: {
        id: {
          in: [...(currentUser.favoriteIds || [])],
        },
      },
    })

    const safeFavorites = favorites.map(favorite => ({
      ...favorite,
      createdAt: favorite.createdAt.toString(),
    }))

    return safeFavorites
  } catch (error: any) {
    throw new Error(error)
  }
}
