import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from '@/routes/app.routes'
import { AuthRoutes } from '@/routes/auth.routes'
import { useAuth } from '@/context/auth'

export const Router = () => {
  const { hasAutenticated } = useAuth()

  return (
    <BrowserRouter>
      {hasAutenticated && <AppRoutes />}
      {!hasAutenticated && <AuthRoutes />}
    </BrowserRouter>
  )
}
