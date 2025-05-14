import { NavLink } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import * as S from './Base'

type NoDataProps = {
  title: string
  hideButton?: boolean
}

export const NoData = ({ title, hideButton = true }: NoDataProps) => (
  <S.NoDataRoot>
    <img
      src="/no-data.svg"
      alt="Nenhum item foi encontrado"
      className="size-60 mb-4"
    />
    <S.NoDataText>{title}</S.NoDataText>
    {!hideButton && (
      <Button variant="default">
        <NavLink to="/">Voltar para home</NavLink>
      </Button>
    )}
  </S.NoDataRoot>
)
