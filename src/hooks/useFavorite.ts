import axios from 'axios'
import { useRouter } from 'next/router'
import { useCallback, useMemo } from 'react'
import { toast } from 'react-hot-toast'

import useLoginModal from './useLoginModal'
import { SafeUser } from '../../types/typings'

interface IUseFavorite {
  listingId: string
  currentUser?: SafeUser | null
}

const useFavorite = ({ listingId, currentUser }: IUseFavorite) => {
  const router = useRouter()

  const loginModal = useLoginModal()

  const hasFavorited = useMemo(() => {
    const list = currentUser?.favoriteIds || []

    return list.includes(listingId)
  }, [currentUser, listingId])

  const toggleFavorite = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation()

      if (!currentUser) {
        return loginModal.onOpen()
      }

      try {
        let request

        if (hasFavorited) {
          request = () => axios.delete(`/api/favorites/${listingId}`)
        } else {
          request = () => axios.post(`/api/favorites/${listingId}`)
        }

        await request()
        router.push(router.asPath)
        toast.success('Success')
      } catch (error) {
        toast.error('Something went wrong.')
      }
    },
    [currentUser, hasFavorited, listingId, loginModal, router],
  )

  return {
    hasFavorited,
    toggleFavorite,
  }
}

export default useFavorite
