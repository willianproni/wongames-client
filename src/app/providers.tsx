import { PropsWithChildren } from 'react'

import GlobalStyles from '@/styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '@/styles/theme'

export function Provider({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}
