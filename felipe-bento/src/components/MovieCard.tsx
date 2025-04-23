import { MovieCardProps } from "@/types/types";
import RatingCircle from "@/components/RatingCircle";

const MovieCard = ({ movie, genresMap, onClick }: MovieCardProps) => {
  const genres = movie.genre_ids
    .map((id) => genresMap[id] || "Desconhecido")
    .join(", ");

  return (
    <div
      className="relative flex flex-col justify-end items-center w-full aspect-[2/3] rounded-md overflow-hidden cursor-pointer transition-transform hover:scale-105 group"
      onClick={() => onClick(movie.id)}
    >
      <div
        className="absolute w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: movie.poster_path
            ? `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`
            : `url('/assets/posterNotFound.svg')`,
        }}
      ></div>

      <div className="absolute w-full h-1/3 bottom-0 bg-gradient-to-t from-[var(--black-500)] via-[var(--black-500)]/50 to-transparent dark:from-[var(--black-500)] dark:via-[var(--black-500)]/50"></div>

      <div className="absolute bottom-0 w-full p-4 text-left">
        <h3 className="text-sm font-bold font-montserrat text-[var(--mauve-1)] truncate">
          {movie.title}
        </h3>
        <p className="hidden group-hover:block text-xs text-[var(--mauve-9)]">
          {genres}
        </p>
      </div>

      <div className="absolute flex items-center justify-center w-[98px] h-[98px] inset-0 m-auto z-10 transition-opacity opacity-0 group-hover:opacity-100">
        <div className="absolute w-full h-full rounded-full backdrop-blur-sm bg-[var(--black-500)]/50 dark:bg-[var(--black-500)]/50"></div>
        <RatingCircle rating={movie.vote_average * 10} size="small" />
      </div>
    </div>
  );
};

export default MovieCard;
