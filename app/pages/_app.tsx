import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Page from './Component/page'

export default function App({ Component, pageProps }: AppProps) {
  return( 
  <> <Component {...pageProps} />
  <Page/>
  </>
  )
  
}
