import { api } from '@/lib/axios'

export interface CreateMovieResponse {
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
}

export async function createMovie(data: CreateMovieResponse) {
  await api.post('/movies', data)
}
