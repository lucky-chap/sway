import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import { RecoilRoot } from 'recoil'

import SignInDialog from 'components/Dialog/Dialog'

import 'styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class' disableTransitionOnChange>
      <NextNProgress color='#ec4899' />
      <RecoilRoot>
        <SignInDialog />
        <Component {...pageProps} />
      </RecoilRoot>
    </ThemeProvider>
  )
}

export default MyApp
