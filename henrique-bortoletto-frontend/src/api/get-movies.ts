import { api } from '@/lib/axios'

export interface MoviesResponse {
  data: {
    id: number
    title: string
    thumb: string
    genres: string[]
  }[]
  total: number
  page: number
  lastPage: number
}

interface MoviesRequest {
  limit: number
  page: number
  q?: string
}

export async function getMovies({ limit, page, q }: MoviesRequest) {
  const response = await api.get<MoviesResponse>('/movies', {
    params: { page, limit, q }
  })

  return response.data
}
