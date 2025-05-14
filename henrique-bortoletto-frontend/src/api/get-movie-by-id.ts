import { api } from '@/lib/axios'

export interface MoviesResponse {
  id: number
  title: string
  sinopse: string
  popularity: number
  votes: number
  release: string
  duration: number
  status: string
  language: string
  budget: number
  revenue: number
  profit: number
  cover: string
  thumb: string
  embeed_yt: string
  genres: string[]
  userId: number
  createdAt: string
  updatedAt: string
}

export async function getMovieById(id: number) {
  const response = await api.get<MoviesResponse>(`/movies/${id}`)

  return response.data
}
