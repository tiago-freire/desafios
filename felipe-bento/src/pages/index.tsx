import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { fetchTrendingMovies, searchMovies } from "@/services/movies";
import { Movie } from "@/types/types";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { fetchGenres } from "@/store/slices/genreSlice";
import MovieList from "@/components/MovieList";

const Home = ({
  searchTerm,
  selectedGenres,
}: {
  searchTerm: string;
  selectedGenres: number[];
}) => {
  const [isTrending, setIsTrending] = useState(true);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const genres = useAppSelector((state) => state.genres.genres);

  useEffect(() => {
    dispatch(fetchGenres());

    const fetchData = async () => {
      setIsLoading(true);
      try {
        if (searchTerm) {
          const response = await searchMovies(searchTerm, page, selectedGenres);
          setMovies(response.results);
          setTotalPages(response.total_pages);
          setIsTrending(false);
        } else {
          const response = await fetchTrendingMovies();
          setMovies(response.results);
          setTotalPages(1);
          setIsTrending(true);
        }
      } catch (error) {
        console.error("Erro ao carregar filmes:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [dispatch, searchTerm, selectedGenres, page]);

  const handleMovieClick = (movieId: number) => {
    router.push(`/movie/${movieId}`);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <main>
      <MovieList
        isTrending={isTrending}
        movies={movies}
        genres={genres}
        page={page}
        totalPages={totalPages}
        isLoading={isLoading}
        onPageChange={handlePageChange}
        onMovieClick={handleMovieClick}
      />
    </main>
  );
};

export default Home;
