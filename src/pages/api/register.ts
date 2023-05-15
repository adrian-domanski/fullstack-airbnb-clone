import bcrypt from 'bcryptjs'
import prisma from '../../libs/prismadb'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const body = await req.body
    const { email, name, password } = body

    const hashedPassword = await bcrypt.hash(password, 12)

    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
      },
    })

    return res.json(user)
  }
}
