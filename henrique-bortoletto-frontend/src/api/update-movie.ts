import { api } from '@/lib/axios'
import type { MoviesResponse } from './get-movie-by-id'

export async function updateMovie(
  id: number,
  data: Omit<MoviesResponse, 'id' | 'userId' | 'createdAt' | 'updatedAt'>
) {
  await api.patch(`/movies/${id}`, data)
}
