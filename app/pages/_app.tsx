 

// pages/_app.js
import {ChakraProvider } from '@chakra-ui/react'

 
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
 
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp

// function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />

  
// }


// export default MyApp
