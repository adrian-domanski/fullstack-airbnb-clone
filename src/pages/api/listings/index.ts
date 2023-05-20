import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../libs/prismadb'
import getCurrentUser from '../../../actions/getCurrentUser'
import { NextResponse } from 'next/server'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const body = await req.body
    const {
      title,
      description,
      imageSrc,
      category,
      roomCount,
      bathroomCount,
      guestCount,
      location,
      price,
    } = body

    const currentUser = await getCurrentUser(req, res)

    if (!currentUser) {
      return NextResponse.error()
    }

    const listing = await prisma.listing.create({
      data: {
        title,
        description,
        imageSrc,
        category,
        roomCount,
        bathroomCount,
        guestCount,
        locationValue: location.value,
        price: parseInt(price, 10),
        userId: currentUser.id,
      },
    })

    return res.json(listing)
  }
}
