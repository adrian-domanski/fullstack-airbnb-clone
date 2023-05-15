import { getServerSession } from 'next-auth/next'
import { authOptions } from '../pages/api/auth/[...nextauth]'
import prisma from '../libs/prismadb'
import { NextApiRequest, NextApiResponse } from 'next'
import { User } from '@prisma/client'
import { SafeUser } from '../../types/typings'

export async function getSession(req: NextApiRequest, res: NextApiResponse) {
  return await getServerSession(req, res, authOptions)
}

export default async function getCurrentUser(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const session = await getSession(req, res)

    if (!session?.user?.email) {
      return null
    }

    const currentUser = (await prisma.user.findUnique({
      where: {
        email: session.user.email as string,
      },
    })) as User

    if (!currentUser) {
      return null
    }

    return {
      ...currentUser,
      createdAt: currentUser.createdAt.toISOString(),
      updatedAt: currentUser.updatedAt.toISOString(),
      emailVerified: currentUser.emailVerified?.toISOString() || null,
    } as SafeUser
  } catch (error: any) {
    console.log(error)
    return null
  }
}
