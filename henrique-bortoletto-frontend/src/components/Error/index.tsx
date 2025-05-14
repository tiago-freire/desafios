import { NavLink } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import * as S from './Base'

export const Error = () => (
  <S.NoDataRoot>
    <img src="/error.svg" alt="Error" className="size-96" />
    <S.NoDataText>Erro ao carregar detalhes do filme :(</S.NoDataText>
    <Button variant="default">
      <NavLink to="/">Voltar para home</NavLink>
    </Button>
  </S.NoDataRoot>
)
