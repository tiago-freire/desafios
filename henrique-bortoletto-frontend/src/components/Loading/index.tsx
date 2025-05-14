import { LoaderCircle } from 'lucide-react'

import * as S from './Base'

export const Loading = () => (
  <S.LoadingRoot>
    <S.LoadingTrigger>
      <LoaderCircle className="mx-auto mb-6 animate-spin size-10" />
    </S.LoadingTrigger>
  </S.LoadingRoot>
)
