const year = new Date().getFullYear()

import * as S from './Base'

export const Footer = () => (
  <S.FooterRoot>
    <S.FooterText>
      {year} &copy; Todos os direitos reservados a{' '}
      <strong className="font-semibold">Cubos Movies</strong>
    </S.FooterText>
  </S.FooterRoot>
)
