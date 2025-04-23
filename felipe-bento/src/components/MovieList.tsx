import { MovieListProps } from "@/types/types";
import MovieCard from "@/components/MovieCard";
import Pagination from "@/components/Pagination";

const MovieList = ({
  isTrending,
  movies,
  genres,
  page,
  totalPages,
  isLoading,
  onPageChange,
  onMovieClick,
}: MovieListProps) => {
  const genresMap = genres.reduce((acc: Record<number, string>, genre) => {
    acc[genre.id] = genre.name;
    return acc;
  }, {});

  return (
    <section className="p-4 flex flex-col items-center">
      {/* Grid Responsivo de Filmes */}
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 justify-center w-full max-w-[1320px] bg-[var(--mauve-alpha-3)] dark:bg-[var(--mauve-dark-alpha-3)] rounded-md p-6 z-3">
        {isLoading ? (
          <p className="text-[var(--mauve-dark-1)] dark:text-[var(--mauve-1)]">
            Carregando...
          </p>
        ) : movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              genresMap={genresMap}
              onClick={onMovieClick}
            />
          ))
        ) : (
          <p className="text-center text-[var(--mauve-dark-1)] dark:text-[var(--mauve-1)]">
            Nenhum resultado encontrado.
          </p>
        )}
      </div>

      {/* Paginação */}
      {!isTrending && movies.length > 0 && (
        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      )}
    </section>
  );
};

export default MovieList;
