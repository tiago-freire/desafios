import { useState } from "react";
import { SearchBarProps } from "@/types/types";
import { Search, Filter } from "@/components/icons";

const SearchBar = ({ onSearch, onOpenFilters }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex flex-row justify-center items-center p-4 gap-2 w-full max-w-[414px] h-[88px] my-0 md:my-2 mx-auto z-2 bg-[var(--mauve-alpha-2)] dark:bg-[var(--mauve-dark-alpha-2)] backdrop-blur-[2px] rounded-md">
      {/* Input de Busca */}
      <div className="flex items-center justify-between px-4 py-2 w-[317px] h-[56px] max-w-[488px] bg-[var(--mauve-alpha-1)] dark:bg-[var(--mauve-dark-alpha-1)] border border-[var(--mauve-7)] dark:border-[var(--mauve-dark-7)] focus-within:border-[var(--purple-9)] rounded-md">
        <div className="flex items-center justify-between w-full">
          <input
            type="text"
            placeholder="Pesquise por filmes"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full text-[var(--mauve-9)] dark:text-[var(--mauve-dark-9)] placeholder:text-[var(--mauve-9)] dark:placeholder:text-[var(--mauve-dark-9)] text-base font-roboto focus:outline-none"
          />
        </div>
        <button
          onClick={handleSearch}
          aria-label="Buscar"
          className="flex items-center justify-center w-[24px] h-[24px] rounded-full hover:bg-[var(--purple-alpha-7)] dark:hover:bg-[var(--purple-dark-alpha-7)] transition duration-300"
        >
          <Search className="w-5 h-5 text-[var(--mauve-dark-11)] dark:text-[var(--mauve-11)]" />
        </button>
      </div>

      {/* Botão de Filtros */}
      <button
        onClick={onOpenFilters}
        aria-label="Abrir filtros"
        className="flex items-center justify-center w-[55px] h-[56px] bg-[var(--purple-alpha-2)] dark:bg-[var(--purple-dark-alpha-2)] backdrop-blur-[2px] hover:bg-[var(--purple-alpha-2)] dark:hover:bg-[var(--purple-dark-alpha-2)] transition duration-300"
      >
        <Filter className="w-[24px] h-[24px] text-[var(--mauve-dark-1)] dark:text-[var(--mauve-1)]" />
      </button>
    </div>
  );
};

export default SearchBar;
