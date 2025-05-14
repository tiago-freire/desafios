import { DetailDescription } from '../Description'

import { formatDate } from '@/lib/format-date'
import { formatMoney } from '@/lib/format-money'
import { getStatus } from '@/constants/situation'
import { getLanguage } from '@/constants/languages'
import { formatMinutesToHours } from '@/lib/format-hour'
import { DetailGenres } from '@/components/Details/Genres'

import * as S from './Base'

type DetailContentProps = {
  sinopse: string
  release: string
  duration: number
  status: string
  language: string
  budget: number
  revenue: number
  genres: string[]
}

export const DetailContent = ({
  sinopse,
  release,
  duration,
  status,
  language,
  genres,
  budget,
  revenue
}: DetailContentProps) => (
  <S.DetailSummaryRoot>
    <div className="flex flex-col gap-4">
      <DetailDescription title="Sinopse" value={sinopse} />
      <DetailGenres title="Generos" genres={genres} />
    </div>
    <S.DetailSummaryContent>
      <S.DetailSummaryGrid className="items-start">
        <DetailDescription title="Lançamento" value={formatDate(release)} />
        <DetailDescription
          title="Duração"
          value={formatMinutesToHours(duration)}
        />
      </S.DetailSummaryGrid>
      <S.DetailSummaryGrid>
        <DetailDescription title="Situação" value={getStatus(status)} />
        <DetailDescription title="Idioma" value={getLanguage(language)} />
      </S.DetailSummaryGrid>
      <S.DetailSummaryGrid className="grid-cols-3">
        <DetailDescription title="Orçamento" value={formatMoney(budget)} />
        <DetailDescription title="Receita" value={formatMoney(revenue)} />
        <DetailDescription
          title="Lucro"
          value={formatMoney(revenue - budget)}
        />
      </S.DetailSummaryGrid>
    </S.DetailSummaryContent>
  </S.DetailSummaryRoot>
)
