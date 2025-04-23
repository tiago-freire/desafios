import { apiClient } from "./apiConfig";
import { SearchResponse, MovieDetails } from "@/types/types";

export const fetchTrendingMovies = async (): Promise<SearchResponse> => {
  const response = await apiClient.get("/trending/movie/week");

  return {
    results: response.data.results,
    page: 1,
    total_pages: 1,
    total_results: response.data.results.length,
  };
};

export const searchMovies = async (
  searchTerm: string,
  page: number = 1,
  genres?: number[]
): Promise<SearchResponse> => {
  const genreQuery = genres && genres.length > 0 ? genres.join(",") : undefined;
  const response = await apiClient.get("/search/movie", {
    params: { query: searchTerm, page, with_genres: genreQuery },
  });

  return {
    results: response.data.results,
    page: response.data.page,
    total_pages: response.data.total_pages,
    total_results: response.data.total_results,
  };
};

export const fetchMovieDetails = async (
  movieId: number
): Promise<MovieDetails> => {
  const response = await apiClient.get(`/movie/${movieId}`);
  return response.data;
};
