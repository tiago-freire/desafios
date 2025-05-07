import { useEffect, useState, KeyboardEvent } from 'react';
import { getAllMovies } from '../../services/movieService';
import { Movie } from '../../types/movie';
import { useAuth } from '../../contexts/AuthContext';
import MovieCard from '../../components/MovieCard';
import Pagination from '../../components/Pagination';
import * as S from './styles';
import Button from '../../components/Button/style';
import IconSearch from '../../assets/HomeAssets/Search.svg';
import { AddMovieModal } from '../../components/ModalAddMovie';
import { ModalFilter, Filters } from '../../components/FilterMovieModal';

const Home = (): JSX.Element => {
  const { logout } = useAuth();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [search, setSearch] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [modalAddOpen, setModalAddOpen] = useState<boolean>(false);
  const [modalFilterOpen, setModalFilterOpen] = useState<boolean>(false);
  const [filters, setFilters] = useState<Filters>({});

  useEffect(() => {
    const fetchMovies = async (): Promise<void> => {
      try {
        const { data, totalPages } = await getAllMovies({ page, title: searchQuery, ...filters });
        setMovies(data);
        setTotalPages(totalPages);
      } catch (error) {
        console.error('Erro ao buscar filmes:', error);
      }
    };

    fetchMovies();
  }, [page, searchQuery, filters]);

  const handleMovieAdded = (newMovie: Movie): void => {
    setMovies(prev => [newMovie, ...prev]);
  };

  const handleSearch = (): void => {
    setPage(1);
    setSearchQuery(search);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const getActiveFilterCount = (): number => {
    return Object.entries(filters).filter(([_, value]) => value !== undefined && value !== '').length;
  };

  return (
    <S.Container>
      <S.ActionsHome>
        <S.InputWrapper>
          <S.StyledInput
            type="text"
            placeholder="Pesquise por filmes"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <S.IconSearch src={IconSearch} alt="Ícone de busca" onClick={handleSearch} />
        </S.InputWrapper>

        <S.AreaButtons>
          <S.FilterGroup>
            <S.ButtonFilter onClick={() => setModalFilterOpen(true)}>
              Filtros {getActiveFilterCount() > 0 && (
                <S.FilterBadge>{getActiveFilterCount()}</S.FilterBadge>
              )}
            </S.ButtonFilter>

            {getActiveFilterCount() > 0 && (
              <S.ClearFiltersButton onClick={() => setFilters({})}>✕</S.ClearFiltersButton>
            )}
          </S.FilterGroup>

          <Button width="111px" onClick={() => setModalAddOpen(true)}>Adicionar Filme</Button>
        </S.AreaButtons>
      </S.ActionsHome>

      <S.SectionCards>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <S.NoResultsMessage>
            Nenhum filme encontrado com os filtros ou busca atual.
          </S.NoResultsMessage>
        )}
      </S.SectionCards>

      <AddMovieModal
        isOpen={modalAddOpen}
        onClose={() => setModalAddOpen(false)}
        onMovieAdded={handleMovieAdded}
      />

      <ModalFilter
        isOpen={modalFilterOpen}
        onClose={() => setModalFilterOpen(false)}
        currentFilters={filters}
        onApply={(appliedFilters: Filters) => {
          setFilters(appliedFilters);
          setPage(1);
        }}
      />

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </S.Container>
  );
};

export default Home;
