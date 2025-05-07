import * as S from "./styles"

interface Props {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  }
  
  const Pagination = ({ currentPage, totalPages, onPageChange }: Props) => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  
    return (
      <S.Container className="pagination">
        {pages.map((page) => (
          <button
            key={page}
            className={page === currentPage ? 'active' : ''}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
      </S.Container >
    );
  };
  
  export default Pagination;
  