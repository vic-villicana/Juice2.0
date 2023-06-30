import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { GlobalContextProvider } from '@/assets/store'
//aws imports
import  { Amplify } from 'aws-amplify'
import awsExports from '../src/aws-exports'

Amplify.configure({ ...awsExports, ssr:true})

export default function App({ Component, pageProps }: AppProps) {
  return( 
  <GlobalContextProvider>
    <Component {...pageProps} />
  </GlobalContextProvider>
    
)}
