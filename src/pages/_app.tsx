import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { defaultTheme } from '~/styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  const theme = defaultTheme
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
