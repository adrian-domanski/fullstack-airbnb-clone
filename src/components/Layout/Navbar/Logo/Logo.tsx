import Image from 'next/image'
import { useRouter } from 'next/navigation'
import 'twin.macro'

const Logo = () => {
  const router = useRouter()

  return (
    <Image
      onClick={() => router.push('/')}
      tw="hidden md:block cursor-pointer"
      src="/img/logo.png"
      height="100"
      width="100"
      alt="Logo"
    />
  )
}

export default Logo
