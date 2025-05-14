import { Outlet } from 'react-router-dom'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

import * as S from './Base'

export const AppLayout = () => (
  <S.AppRoot>
    <Header />
    <S.AppContent>
      <Outlet />
    </S.AppContent>
    <Footer />
  </S.AppRoot>
)
