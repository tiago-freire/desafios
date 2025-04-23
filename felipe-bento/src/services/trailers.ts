import { apiClient } from "./apiConfig";
import { Trailer } from "@/types/types";

export const fetchTrailer = async (movieId: number): Promise<Trailer[]> => {
  const response = await apiClient.get(`/movie/${movieId}/videos`);
  return response.data.results;
};
