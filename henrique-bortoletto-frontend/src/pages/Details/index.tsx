import { toast } from 'sonner'
import { useParams, useNavigate } from 'react-router-dom'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

import { Button } from '@/components/ui/button'
import { deleteMovie } from '@/api/delete-movie'
import { getMovieById } from '@/api/get-movie-by-id'

import { Error } from '@/components/Error'
import { NoData } from '@/components/NoData'
import { Loading } from '@/components/Loading'
import { Edit } from '@/components/Movie/Edit'
import { DetailVideo } from '@/components/Details/Video'
import { DetailStats } from '@/components/Details/Stats'
import { type MovieSchema } from '@/components/Movie/Form'
import { DetailsHeader } from '@/components/Details/Header'
import { DetailContent } from '@/components/Details/Summary'

import * as S from './Base'

export const Details = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const handleDeleteSuccess = () => {
    queryClient.invalidateQueries({
      queryKey: ['movies']
    })

    toast.success('Filme excluído com sucesso')
    navigate('/')
  }

  const handleUpdateSuccess = () => {
    queryClient.invalidateQueries({
      queryKey: ['movie-details', id]
    })

    queryClient.invalidateQueries({
      queryKey: ['movies']
    })
  }

  const handleDeleteMovie = () => {
    const confirmed = window.confirm('Deseja excluir este filme?')
    if (!confirmed) return
    mutate()
  }

  const { data, isLoading, error } = useQuery({
    queryKey: ['movie-details', id],
    queryFn: () => getMovieById(Number(id)),
    enabled: !!id
  })

  const { mutate, isPending } = useMutation({
    mutationFn: () => deleteMovie(Number(id)),
    onSuccess: () => handleDeleteSuccess(),
    onError: () => toast.error('Erro ao excluir filme')
  })

  if (isLoading) return <Loading />
  if (error) return <Error />

  if (!data) {
    return <NoData hideButton={false} title="Filme não encontrado :(" />
  }

  return (
    <S.DetailsRoot>
      <S.DetailsContent>
        <S.DetailsCover cover={data.cover} />
        <S.DetailsHeaderRoot>
          <DetailsHeader title={data.title} />
          <S.DetailsHeaderActions>
            <Button
              variant="secondary"
              title="Deletar filme"
              onClick={handleDeleteMovie}
              disabled={isPending}
            >
              {isPending ? 'Deletando...' : 'Deletar'}
            </Button>
            <Edit
              movieId={data.id}
              values={data as MovieSchema}
              onSuccess={handleUpdateSuccess}
            />
          </S.DetailsHeaderActions>
        </S.DetailsHeaderRoot>
        <S.DetailsGrid>
          <S.DetailsGridThumb src={data.thumb} alt={data.title} />
          <S.DetailsGridDivider>
            <DetailStats
              title={data.title}
              popularity={data.popularity}
              votes={data.votes}
            />
            <DetailContent
              sinopse={data.sinopse}
              release={data.release}
              duration={data.duration}
              genres={data.genres}
              status={data.status}
              language={data.language}
              budget={data.budget}
              revenue={data.revenue}
            />
          </S.DetailsGridDivider>
        </S.DetailsGrid>
      </S.DetailsContent>

      {data.embeed_yt && (
        <DetailVideo videoId={data.embeed_yt} title={data.title} />
      )}
    </S.DetailsRoot>
  )
}
