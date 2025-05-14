import { Outlet } from 'react-router-dom'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

import * as S from './Base'

export const AuthLayout = () => (
  <S.AuthRoot>
    <Header />
    <S.AuthContent>
      <S.AuthContainer>
        <Outlet />
      </S.AuthContainer>
    </S.AuthContent>
    <Footer />
  </S.AuthRoot>
)
