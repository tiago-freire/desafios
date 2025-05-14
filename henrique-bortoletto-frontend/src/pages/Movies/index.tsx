import { useSearchParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

import { Search } from '@/components/Search'
import { NoData } from '@/components/NoData'
import { Loading } from '@/components/Loading'
import { MovieList } from '@/components/MovieList'
import { Pagination } from '@/components/Pagination'

import { getMovies } from '@/api/get-movies'

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const limit = Number(searchParams.get('limit')) || 10
  const currentPage = Number(searchParams.get('page')) || 1
  const query = searchParams.get('q') || ''

  const { data: movies, isLoading } = useQuery({
    queryKey: ['movies', currentPage, limit, query],
    queryFn: () => getMovies({ page: currentPage, limit, q: query }),
    staleTime: 1000 * 60 * 5 // 5 minutos
  })

  const handlePageChange = (page: number) => {
    setSearchParams((prev) => {
      prev.set('page', String(page + 1))
      return prev
    })
  }

  return (
    <>
      <Search />
      <div className="flex-1 flex flex-col justify-between">
        {isLoading && <Loading />}

        {!isLoading && movies?.data.length === 0 && (
          <NoData title="Nenhum filme encontrado" />
        )}

        {!isLoading && movies!.data.length > 0 && (
          <>
            <MovieList movies={movies?.data ?? []} />
            <Pagination
              perPage={limit}
              pageIndex={currentPage - 1}
              totalCount={movies?.total ?? 0}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </div>
    </>
  )
}
