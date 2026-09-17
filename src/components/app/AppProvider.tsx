import type { PropsWithChildren } from 'react'

import { ChakraProvider } from '@chakra-ui/react'
import { system } from 'components/theme'
import { Toaster } from 'components/ui'
import { ThemeProvider } from 'next-themes'

import AlertDialogProvider from './AlertDialogProvider'

const AppProvider = ({ children }: PropsWithChildren) => (
  <ChakraProvider value={system}>
    <ThemeProvider attribute="class" defaultTheme="system" disableTransitionOnChange enableSystem>
      <AlertDialogProvider>
        {children}
        <Toaster />
      </AlertDialogProvider>
    </ThemeProvider>
  </ChakraProvider>
)

export default AppProvider
