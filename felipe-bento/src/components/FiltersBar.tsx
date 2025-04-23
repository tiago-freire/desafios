import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { FiltersBarProps, Genre } from "@/types/types";

const FiltersBar = ({
  isVisible,
  onApply,
  onClose,
  onClearFilters,
}: FiltersBarProps) => {
  const { genres } = useSelector((state: RootState) => state.genres);
  const [searchText, setSearchText] = useState("");
  const [filteredGenres, setFilteredGenres] = useState<Genre[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);

  useEffect(() => {
    const filtered = genres.filter((genre) =>
      genre.name.toLowerCase().includes(searchText.toLowerCase())
    );

    const selectedFirst = [
      ...filtered.filter((genre) => selectedGenres.includes(genre.id)),
      ...filtered.filter((genre) => !selectedGenres.includes(genre.id)),
    ];
    setFilteredGenres(selectedFirst);
  }, [searchText, genres, selectedGenres]);

  const handleGenreToggle = (genreId: number) => {
    if (selectedGenres.includes(genreId)) {
      setSelectedGenres(selectedGenres.filter((id) => id !== genreId));
    } else {
      setSelectedGenres([...selectedGenres, genreId]);
    }
  };

  const handleApply = () => {
    onApply(selectedGenres);
  };

  const handleClearFilters = () => {
    setSelectedGenres([]);
    setSearchText("");
    onClearFilters();
    onClose();
  };

  if (!isVisible) return null;

  return (
    <div className="flex flex-col justify-center items-center p-8 gap-6 w-full max-w-[1322px] h-auto bg-[var(--mauve-dark-alpha-3)] dark:bg-[var(--mauve-alpha-3)] backdrop-blur-sm rounded-md shadow-lg mx-auto border border-[var(--mauve-dark-6)] dark:border-[var(--mauve-6)]">
      <h2 className="text-lg md:text-xl font-roboto text-[var(--mauve-dark-1)] dark:text-[var(--mauve-1)] text-center">
        Selecione seus filtros abaixo
      </h2>

      <input
        type="text"
        placeholder="Buscar gêneros..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="w-full max-w-[420px] h-[55px] px-4 py-2 text-base font-roboto text-[var(--mauve-dark-1)] dark:text-[var(--mauve-1)] bg-[var(--mauve-dark-alpha-2)] dark:bg-[var(--mauve-alpha-2)] border border-[var(--mauve-dark-7)] dark:border-[var(--mauve-7)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--purple-dark-9)] dark:focus:ring-[var(--purple-9)]"
      />

      <div className="flex flex-wrap justify-center max-h-[150px] overflow-y-auto gap-3 w-full">
        {filteredGenres.map((genre) => (
          <label
            key={genre.id}
            className={`flex items-center px-3 py-2 rounded-md text-sm cursor-pointer bg-[var(--mauve-dark-alpha-3)] dark:bg-[var(--mauve-alpha-3)] text-[var(--mauve-dark-1)] dark:text-[var(--mauve-1)] hover:brightness-110 ${
              selectedGenres.includes(genre.id)
                ? "bg-[var(--purple-dark-9)] text-[var(--mauve-dark-1)] dark:bg-[var(--purple-9)] dark:text-[var(--mauve-1)]"
                : ""
            }`}
          >
            <input
              type="checkbox"
              checked={selectedGenres.includes(genre.id)}
              onChange={() => handleGenreToggle(genre.id)}
              className="mr-2"
            />
            {genre.name}
          </label>
        ))}
      </div>

      <div className="flex gap-4">
        <button
          onClick={handleApply}
          className="px-6 py-2 bg-[var(--purple-dark-9)] text-[var(--mauve-dark-1)] dark:bg-[var(--purple-9)] dark:text-[var(--mauve-1)] rounded-md hover:bg-[var(--purple-dark-1)] dark:hover:bg-[var(--purple-1)] transition duration-300"
        >
          Aplicar Filtros
        </button>
        <button
          onClick={handleClearFilters}
          className="px-6 py-2 bg-[var(--mauve-dark-8)] text-[var(--mauve-dark-1)] dark:bg-[var(--mauve-8)] dark:text-[var(--mauve-1)] rounded-md hover:bg-[var(--mauve-dark-9)] dark:hover:bg-[var(--mauve-9)] transition duration-300"
        >
          Limpar Filtros
        </button>
        <button
          onClick={onClose}
          className="px-6 py-2 bg-[var(--mauve-dark-alpha-2)] text-[var(--mauve-dark-1)] dark:bg-[var(--mauve-alpha-2)] dark:text-[var(--mauve-1)] rounded-md hover:bg-[var(--mauve-dark-alpha-3)] dark:hover:bg-[var(--mauve-alpha-3)] transition duration-300"
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default FiltersBar;
