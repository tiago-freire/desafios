import './global.css'

import { Toaster } from 'sonner'
import { QueryClientProvider } from '@tanstack/react-query'

import { Router } from '@/routes'
import { AuthProvider } from '@/context/auth'

import { queryClient } from '@/lib/react-query'
import { ThemeProvider } from '@/components/theme-provider'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="@cubos:theme">
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Router />
        </AuthProvider>
      </QueryClientProvider>
      <Toaster richColors />
    </ThemeProvider>
  )
}

export default App
