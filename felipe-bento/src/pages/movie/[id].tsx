import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import { fetchMovieDetails } from "@/services/movies";
import { fetchTrailer } from "@/services/trailers";
import { MovieDetails } from "@/types/types";
import RatingCircle from "@/components/RatingCircle";

const MovieDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [trailer, setTrailer] = useState<string | null>(null);

  const translateStatus = (status: string): string => {
    const statusMap: { [key: string]: string } = {
      Released: "Lançado",
      "Post Production": "Pós-produção",
      "In Production": "Em produção",
      Planned: "Planejado",
      Canceled: "Cancelado",
      Rumored: "Rumorado",
    };

    return statusMap[status] || status;
  };

  useEffect(() => {
    if (id) {
      const loadMovieData = async () => {
        try {
          const movieData = await fetchMovieDetails(Number(id));
          setMovie(movieData);

          const trailerData = await fetchTrailer(Number(id));
          const officialTrailer = trailerData.find(
            (video) => video.type === "Trailer" && video.site === "YouTube"
          );
          setTrailer(
            officialTrailer
              ? `https://www.youtube.com/embed/${officialTrailer.key}`
              : null
          );
        } catch (error) {
          console.error("Erro ao carregar dados do filme:", error);
        }
      };

      loadMovieData();
    }
  }, [id]);

  if (!movie)
    return (
      <p className="text-center text-[var(--mauve-dark-1)] dark:text-[var(--mauve-1)]">
        Carregando...
      </p>
    );

  return (
    <main className="p-4 max-w-[1322px] mx-auto space-y-6">
      <div
        className={`relative grid grid-cols-1 md:grid-cols-3 gap-6 rounded-lg lg:p-6`}
      >
        <div className="hidden md:block absolute w-full h-full top-0 z-10 bg-gradient-to-r from-[var(--mauve-1)] via-[var(--mauve-1)]/50 to-[var(--mauve-1)] dark:from-[var(--mauve-dark-1)] dark:via-[var(--mauve-dark-1)]/50 dark:to-[var(--mauve-dark-1)] rounded-lg"></div>

        <div
          className={`hidden md:block absolute w-full h-full top-0 z-0 bg-cover bg-center rounded-lg`}
          style={{
            backgroundImage: movie.backdrop_path
              ? `url('https://image.tmdb.org/t/p/w1280${movie.backdrop_path}')`
              : "none",
          }}
        ></div>

        <div className="md:col-span-1 flex justify-center z-20">
          <Image
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : "/assets/posterNotFound.svg"
            }
            alt={movie.title}
            className="rounded-lg shadow-lg"
            width={500}
            height={750}
            placeholder="blur"
            blurDataURL="/assets/placeholder.svg"
          />
        </div>

        <div className="md:col-span-2 space-y-6 z-20">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="space-y-2 space-x-16">
              <h1 className="text-2xl font-bold text-[var(--mauve-dark-1)] dark:text-[var(--mauve-1)]">
                {movie.title}
              </h1>
              <p className="italic text-[var(--mauve-dark-1)] dark:text-[var(--mauve-1)]">
                {movie.original_title}
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-left bg-[var(--mauve-dark-alpha-3)] dark:bg-[var(--mauve-alpha-3)] backdrop-blur-sm rounded-md p-4">
                <h3 className="font-bold text-[var(--mauve-dark-1)] dark:text-[var(--mauve-1)]">
                  Popularidade
                </h3>
                <p className="text-[var(--mauve-dark-1)] dark:text-[var(--mauve-1)]">
                  {movie.popularity}
                </p>
              </div>
              <div className="text-left bg-[var(--mauve-dark-alpha-3)] dark:bg-[var(--mauve-alpha-3)] backdrop-blur-sm rounded-md p-4">
                <h3 className="font-bold text-[var(--mauve-dark-1)] dark:text-[var(--mauve-1)]">
                  Votos
                </h3>
                <p className="text-[var(--mauve-dark-1)] dark:text-[var(--mauve-1)]">
                  {movie.vote_count}
                </p>
              </div>
              <div className="text-center">
                <RatingCircle rating={movie.vote_average * 10} size="small" />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 py-6">
            <div className="space-y-4">
              <div className="p-4 bg-[var(--mauve-dark-alpha-3)] dark:bg-[var(--mauve-alpha-3)] backdrop-blur-sm rounded-md">
                <h2 className="text-lg font-bold uppercase text-[var(--mauve-dark-1)] dark:text-[var(--mauve-1)] mb-2">
                  Sinopse
                </h2>
                <p className="text-base font-normal text-[var(--mauve-dark-1)] dark:text-[var(--mauve-1)]">
                  {movie.overview || "Sinopse não disponível."}
                </p>
              </div>

              <div className="p-4 bg-[var(--mauve-dark-alpha-3)] dark:bg-[var(--mauve-alpha-3)] backdrop-blur-sm rounded-md">
                <h2 className="text-base font-bold uppercase text-[var(--mauve-dark-1)] dark:text-[var(--mauve-1)] mb-2">
                  Gêneros
                </h2>
                <div className="flex flex-wrap gap-2">
                  {movie.genres.map((genre) => (
                    <span
                      key={genre.id}
                      className="px-2 py-1 bg-[var(--purple-dark-alpha-3)] dark:bg-[var(--purple-alpha-3)] rounded-sm text-[12px] font-semibold uppercase text-[var(--purple-dark-1)] dark:text-[var(--purple-1)]"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-[var(--mauve-dark-alpha-3)] dark:bg-[var(--mauve-alpha-3)] backdrop-blur-sm rounded-md">
                  <h3 className="text-xs font-bold uppercase text-[var(--mauve-dark-1)] dark:text-[var(--mauve-1)]">
                    Lançamento
                  </h3>
                  <p className="text-sm font-semibold text-[var(--mauve-dark-1)] dark:text-[var(--mauve-1)]">
                    {new Date(movie.release_date).toLocaleDateString("pt-BR")}
                  </p>
                </div>
                <div className="p-4 bg-[var(--mauve-dark-alpha-3)] dark:bg-[var(--mauve-alpha-3)] backdrop-blur-sm rounded-md">
                  <h3 className="text-xs font-bold uppercase text-[var(--mauve-dark-1)] dark:text-[var(--mauve-1)]">
                    Duração
                  </h3>
                  <p className="text-sm font-semibold text-[var(--mauve-dark-1)] dark:text-[var(--mauve-1)]">
                    {movie.runtime} min
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-[var(--mauve-dark-alpha-3)] dark:bg-[var(--mauve-alpha-3)] backdrop-blur-sm rounded-md">
                  <h3 className="text-xs font-bold uppercase text-[var(--mauve-dark-1)] dark:text-[var(--mauve-1)]">
                    Situação
                  </h3>
                  <p className="text-sm font-semibold text-[var(--mauve-dark-1)] dark:text-[var(--mauve-1)]">
                    {translateStatus(movie.status)}
                  </p>
                </div>
                <div className="p-4 bg-[var(--mauve-dark-alpha-3)] dark:bg-[var(--mauve-alpha-3)] backdrop-blur-sm rounded-md">
                  <h3 className="text-xs font-bold uppercase text-[var(--mauve-dark-1)] dark:text-[var(--mauve-1)]">
                    Idioma
                  </h3>
                  <p className="text-sm font-semibold text-[var(--mauve-dark-1)] dark:text-[var(--mauve-1)]">
                    {movie.original_language.toUpperCase()}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-[var(--mauve-dark-alpha-3)] dark:bg-[var(--mauve-alpha-3)] backdrop-blur-sm rounded-md">
                  <h3 className="text-xs font-bold uppercase text-[var(--mauve-dark-1)] dark:text-[var(--mauve-1)]">
                    Orçamento
                  </h3>
                  <p className="text-sm font-semibold text-[var(--mauve-dark-1)] dark:text-[var(--mauve-1)]">
                    ${movie.budget.toLocaleString()}
                  </p>
                </div>
                <div className="p-4 bg-[var(--mauve-dark-alpha-3)] dark:bg-[var(--mauve-alpha-3)] backdrop-blur-sm rounded-md">
                  <h3 className="text-xs font-bold uppercase text-[var(--mauve-dark-1)] dark:text-[var(--mauve-1)]">
                    Receita
                  </h3>
                  <p className="text-sm font-semibold text-[var(--mauve-dark-1)] dark:text-[var(--mauve-1)]">
                    ${movie.revenue.toLocaleString()}
                  </p>
                </div>
                <div className="p-4 bg-[var(--mauve-dark-alpha-3)] dark:bg-[var(--mauve-alpha-3)] backdrop-blur-sm rounded-md">
                  <h3 className="text-xs font-bold uppercase text-[var(--mauve-dark-1)] dark:text-[var(--mauve-1)]">
                    Lucro
                  </h3>
                  <p className="text-sm font-semibold text-[var(--mauve-dark-1)] dark:text-[var(--mauve-1)]">
                    $
                    {Math.max(0, movie.revenue - movie.budget).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[var(--mauve-dark-1)] dark:text-[var(--mauve-1)] mb-4">
          Trailer
        </h2>
        {trailer ? (
          <iframe
            width="100%"
            className="w-full h-[200px] md:h-[660px]"
            src={trailer}
            title={`${movie.title} Trailer`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <p className="text-[var(--mauve-dark-1)] dark:text-[var(--mauve-1)]">
            Trailer não disponível.
          </p>
        )}
      </div>
    </main>
  );
};

export default MovieDetailsPage;
