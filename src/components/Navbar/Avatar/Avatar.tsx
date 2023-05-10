import Image from 'next/image'
import 'twin.macro'

interface AvatarProps {
  src: string | null | undefined
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <Image
      tw="rounded-full"
      height="30"
      width="30"
      alt="Avatar"
      src={src || '/img/placeholder.jpg'}
    />
  )
}

export default Avatar
