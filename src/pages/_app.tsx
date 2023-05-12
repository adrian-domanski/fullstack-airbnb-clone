import type { AppProps } from 'next/app'
import GlobalStyles from '../styles/GlobalStyles'
import { Toaster } from 'react-hot-toast'
import '../styles/index.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
      <Toaster />
    </>
  )
}

export default MyApp
