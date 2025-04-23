import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "@/components/icons";
import type { PaginationProps } from "@/types/types";

const Pagination = ({ page, totalPages, onPageChange }: PaginationProps) => {
  const [visibleStartPage, setVisibleStartPage] = useState(
    Math.floor((page - 1) / 5) * 5 + 1
  );
  const [pagesToShow, setPagesToShow] = useState(5);

  useEffect(() => {
    const updatePagesToShow = () => {
      if (window.innerWidth < 768) {
        setPagesToShow(3);
      } else {
        setPagesToShow(5);
      }
    };

    window.addEventListener("resize", updatePagesToShow);

    updatePagesToShow();

    return () => {
      window.removeEventListener("resize", updatePagesToShow);
    };
  }, []);

  const visibleEndPage = Math.min(
    visibleStartPage + pagesToShow - 1,
    totalPages
  );

  const visiblePages = Array.from(
    { length: visibleEndPage - visibleStartPage + 1 },
    (_, index) => visibleStartPage + index
  );

  const handlePageChange = (newPage: number) => {
    // Verificar se a nova página pertence ao grupo visível atual
    if (newPage < visibleStartPage || newPage > visibleEndPage) {
      const newVisibleStartPage =
        Math.floor((newPage - 1) / pagesToShow) * pagesToShow + 1;
      setVisibleStartPage(newVisibleStartPage); // Atualizar grupo visível
    }

    onPageChange(newPage); // Atualizar página selecionada
  };

  return (
    <div className="flex flex-row items-center p-6 md:p-0 gap-3 max-w-[500px] w-full h-[92px] justify-center my-4 mx-auto z-4">
      {/* Botão Anterior */}
      <button
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
        className={`flex items-center justify-center px-4 py-3 w-[64px] h-[44px] rounded-sm ${
          page === 1
            ? "bg-[var(--mauve-dark-alpha-3)] text-[var(--mauve-dark-alpha-3)] dark:bg-[var(--mauve-alpha-3)] dark:text-[var(--mauve-alpha-3)] cursor-not-allowed"
            : "bg-[var(--purple-dark-9)] text-[var(--mauve-dark-1)] dark:bg-[var(--purple-9)] dark:text-[var(--mauve-1)]"
        } transition duration-300`}
      >
        <ChevronLeft
          className={`w-[24px] h-[24px] ${
            page === 1
              ? "text-[var(--mauve-dark-1)] dark:text-[var(--mauve-1)]"
              : "text-[var(--mauve-dark-1)] dark:text-[var(--mauve-1)]"
          }`}
        />
      </button>

      {/* Botão [...] para páginas anteriores */}
      {visibleStartPage > 1 && (
        <button
          onClick={() => setVisibleStartPage(visibleStartPage - pagesToShow)}
          className="flex items-center justify-center px-4 py-3 w-[49px] h-[44px] rounded-sm bg-[var(--purple-dark-9)] text-[var(--mauve-dark-1)] dark:bg-[var(--purple-9)] dark:text-[var(--mauve-1)] transition duration-300"
        >
          ...
        </button>
      )}

      {/* Páginas Visíveis */}
      {visiblePages.map((pg) => (
        <button
          key={pg}
          onClick={() => handlePageChange(pg)}
          className={`flex items-center justify-center px-4 py-3 w-[49px] h-[44px] rounded-sm ${
            pg === page
              ? "bg-[var(--purple-dark-alpha-1)] text-[var(--mauve-dark-1)] dark:bg-[var(--purple-alpha-1)] dark:text-[var(--mauve-1)]"
              : "bg-[var(--purple-dark-9)] text-[var(--mauve-dark-1)] dark:bg-[var(--purple-9)] dark:text-[var(--mauve-1)]"
          } transition duration-300`}
        >
          <span className="font-roboto text-base">{pg}</span>
        </button>
      ))}

      {/* Botão [...] para páginas posteriores */}
      {visibleEndPage < totalPages && (
        <button
          onClick={() => setVisibleStartPage(visibleStartPage + pagesToShow)}
          className="flex items-center justify-center px-4 py-3 w-[49px] h-[44px] rounded-sm bg-[var(--purple-dark-9)] text-[var(--mauve-dark-1)] dark:bg-[var(--purple-9)] dark:text-[var(--mauve-1)] transition duration-300"
        >
          ...
        </button>
      )}

      {/* Botão Próximo */}
      <button
        onClick={() => handlePageChange(page + 1)}
        disabled={page === totalPages}
        className={`flex items-center justify-center px-4 py-3 w-[64px] h-[44px] rounded-sm ${
          page === totalPages
            ? "bg-[var(--purple-dark-alpha-1)] text-[var(--mauve-dark-1)] dark:bg-[var(--purple-alpha-1)] dark:text-[var(--mauve-1)] cursor-not-allowed"
            : "bg-[var(--purple-dark-9)] text-[var(--mauve-dark-1)] dark:bg-[var(--purple-9)] dark:text-[var(--mauve-1)]"
        } transition duration-300`}
      >
        <ChevronRight
          className={`w-[24px] h-[24px] ${
            page === totalPages
              ? "text-[var(--mauve-dark-1)] dark:text-[var(--mauve-1)]"
              : "text-[var(--mauve-dark-1)] dark:text-[var(--mauve-1)]"
          }`}
        />
      </button>
    </div>
  );
};

export default Pagination;
