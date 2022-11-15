import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Page from './Component/Page'
import Page3 from './Page3'
import Page4 from './Page4'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <> <Component {...pageProps} />
      <Page />
      <Page3 />
      <Page4/>
    </>
  )

}
