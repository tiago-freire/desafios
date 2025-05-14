import { Badge } from '@/components/ui/badge'
import { formatGenres } from '@/constants/genres'

import * as S from './Base'

type DetailGenresProps = {
  title: string
  genres: string[]
}

export const DetailGenres = ({ title, genres = [] }: DetailGenresProps) => (
  <S.DetailGenresRoot>
    <S.DetailGenresTitle>{title}</S.DetailGenresTitle>
    <S.DetailGenresContent>
      {formatGenres(genres).map((genre) => (
        <Badge
          key={genre}
          className="font-bold bg-purple-alpha-4 text-purple-3 gap-2 rounded-[4px] p-2"
        >
          {genre}
        </Badge>
      ))}
    </S.DetailGenresContent>
  </S.DetailGenresRoot>
)
