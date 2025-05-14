import * as S from './Base'

import { formatGenres } from '@/constants/genres'

type MovieListProps = {
  movies: Array<{
    id: number
    title: string
    thumb: string
    genres: string[]
  }>
}

export const MovieList = ({ movies }: MovieListProps) => (
  <S.MovieRoot>
    {movies.map((movie) => (
      <S.MovieTrigger to={`/movies/${movie.id}`} key={movie.id}>
        <S.MovieThumb src={movie.thumb} alt={movie.title} />
        <S.MovieOverlayRoot>
          <S.MovieOverlayContent>
            <S.MovieOverlayTitle>{movie.title}</S.MovieOverlayTitle>
            <S.MovieOverlayText>
              {formatGenres(movie.genres)?.join(', ')}
            </S.MovieOverlayText>
          </S.MovieOverlayContent>
        </S.MovieOverlayRoot>
        <S.MovieRatingRoot>
          <S.MovieRatingContent>
            <S.MovieRatingSvg />
            <S.MovieRatingShadow />
            <S.MovieRatingText>
              67<span className="text-white text-xs">%</span>
            </S.MovieRatingText>
          </S.MovieRatingContent>
        </S.MovieRatingRoot>
      </S.MovieTrigger>
    ))}
  </S.MovieRoot>
)
