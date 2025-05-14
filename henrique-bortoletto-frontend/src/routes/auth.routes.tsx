import { Routes, Route, Navigate } from 'react-router-dom'

import { AuthLayout } from '@/pages/_layouts/Auth'

import { SignIn } from '@/pages/SignIn'
import { SignUp } from '@/pages/SignUp'

export const AuthRoutes = () => (
  <Routes>
    <Route path="/" element={<AuthLayout />}>
      <Route path="/" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Route>
  </Routes>
)
