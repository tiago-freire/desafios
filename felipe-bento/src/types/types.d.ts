export interface MovieDetails {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection?: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  } | null;
  budget: number;
  genres: { id: number; name: string }[];
  homepage: string | null;
  id: number;
  imdb_id: string | null;
  original_language: string;
  original_title: string;
  overview: string | null;
  popularity: number;
  poster_path: string | null;
  production_companies: {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }[];
  production_countries: { iso_3166_1: string; name: string }[];
  release_date: string;
  revenue: number;
  runtime: number | null;
  spoken_languages: { english_name: string; iso_639_1: string; name: string }[];
  status: string;
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Trailer {
  key: string;
  type: string;
  site: string;
}

export interface SearchResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface Movie {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Genre {
  id: number;
  name: string;
}

// Components Props types
export interface HeaderProps {
  currentTheme: "light" | "dark";
  toggleTheme: () => void;
}

export interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
  onOpenFilters: () => void;
}

export interface FiltersBarProps {
  isVisible: boolean;
  onApply: (selectedGenres: number[]) => void;
  onClose: () => void;
  onClearFilters: () => void;
}

interface TextInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

export interface MovieCardProps {
  movie: Movie;
  genresMap: Record<number, string>;
  onClick: (movieId: number) => void;
}

export interface RatingCircleProps {
  rating: number;
  size?: "default" | "small";
}

export interface MovieListProps {
  isTrending: boolean;
  movies: Movie[];
  genres: Genre[];
  page: number;
  totalPages: number;
  isLoading: boolean;
  onPageChange: (newPage: number) => void;
  onMovieClick: (movieId: number) => void;
}

export interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}
