import { Routes, Route, Navigate } from 'react-router-dom'

import { AppLayout } from '@/pages/_layouts/App'

import { Details } from '@/pages/Details'
import { Movies } from '@/pages/Movies'

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<AppLayout />}>
      <Route path="/" element={<Movies />} />
      <Route path="/movies/:id" element={<Details />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Route>
  </Routes>
)
