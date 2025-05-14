import { DetailPercente } from '../Percente'
import { DetailDescription } from '../Description'

import * as S from './Base'

type DetailStatsProps = {
  title: string
  popularity: number
  votes: number
}

export const DetailStats = ({ title, popularity, votes }: DetailStatsProps) => (
  <S.DetailStatsRoot>
    <S.DetailStatsTitle>{title}</S.DetailStatsTitle>
    <S.DetailStatsContent>
      <DetailDescription title="Popularidade" value={String(popularity)} />
      <DetailDescription title="Votos" value={String(votes)} />
      <div className="flex justify-center">
        <DetailPercente />
      </div>
    </S.DetailStatsContent>
  </S.DetailStatsRoot>
)
