import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "@/store";

import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import FiltersBar from "@/components/FiltersBar";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [searchTerm, setSearchTerm] = useState("");
  const [isFiltersVisible, setFiltersVisible] = useState(false);
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleApplyFilters = (genres: number[]) => {
    setSelectedGenres(genres);
  };

  const toggleFiltersVisibility = () => {
    setFiltersVisible((prev) => !prev);
  };

  const handleClearFilters = () => {
    setSelectedGenres([]);
    setSearchTerm("");
  };

  return (
    <Provider store={store}>
      <div className="relative w-full min-h-screen overflow-hidden">
        <div className="hidden md:block absolute w-full h-[876px] left-0 top-[80px] z-0 bg-cover bg-center opacity-50 dark:opacity-50 bg-[url('/assets/background.png')]"></div>

        <div className="hidden md:block absolute w-full h-full left-0 top-[80px] z-10 bg-gradient-to-b from-[var(--mauve-1)] via-[var(--mauve-1)]/50 to-[var(--mauve-1)] dark:from-[var(--mauve-dark-1)] dark:via-[var(--mauve-dark-1)]/50 dark:to-[var(--mauve-dark-1)]"></div>

        <div className="relative z-20">
          <Header currentTheme={theme} toggleTheme={toggleTheme} />
          <SearchBar
            onOpenFilters={toggleFiltersVisibility}
            onSearch={handleSearch}
          />
          <FiltersBar
            onClose={() => setFiltersVisible(false)}
            isVisible={isFiltersVisible}
            onApply={handleApplyFilters}
            onClearFilters={handleClearFilters}
          />
          <Component
            {...pageProps}
            searchTerm={searchTerm || ""}
            selectedGenres={selectedGenres}
          />
          <Footer />
        </div>
      </div>
    </Provider>
  );
}
