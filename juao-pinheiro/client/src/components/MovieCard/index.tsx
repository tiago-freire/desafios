import { useNavigate } from 'react-router-dom';
import { Movie } from '../../types/movie';
import * as S from "./style";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/filme/${movie.id}`);
  };

  return (
    <S.Movie onClick={handleClick} style={{ cursor: 'pointer' }}>
      <img src={movie.imageUrl} alt={movie.title} />
      <S.InfoMovie>
        <h3>{movie.title}</h3>
        <p>{movie.genre}</p>
      </S.InfoMovie>
    </S.Movie>
  );
};

export default MovieCard;
