import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Provider as StoreProvider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import store from '@/store'
import { ThemeProvider } from '@mui/material/styles'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { GlobalStyles } from '@/styles'
import { customMuiTheme } from '@/context'

// To-do: Replace all MouseEvent types with correct event types

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StoreProvider store={store}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <ThemeProvider theme={customMuiTheme}>
            <GlobalStyles />
            <Component {...pageProps} />

            <ToastContainer
              position="bottom-right"
              theme="dark"
              closeButton={false}
              hideProgressBar
            />
          </ThemeProvider>
        </LocalizationProvider>
      </StoreProvider>
    </>
  )
}
