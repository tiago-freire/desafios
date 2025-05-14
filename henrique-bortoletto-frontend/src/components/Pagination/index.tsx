import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import * as S from './Base'

type PaginationProps = {
  pageIndex: number
  totalCount: number
  perPage: number
  onPageChange: (pageIndex: number) => Promise<void> | void
}

const getVisiblePages = (current: number, total: number, max: number) => {
  if (total <= max) return Array.from({ length: total }, (_, i) => i)

  const min = Math.min(current < 3 ? 0 : current - 1, total - max)
  const start = Math.max(0, min)

  return Array.from({ length: max }, (_, i) => start + i)
}

const isDisabled = (
  page: number,
  isFirstPage: boolean,
  isLastPage: boolean,
  totalPages: number
) => {
  return (page === 0 && isFirstPage) || (page === totalPages - 1 && isLastPage)
}

export function Pagination({
  perPage,
  pageIndex,
  totalCount,
  onPageChange
}: PaginationProps) {
  const totalPages = Math.ceil(totalCount / perPage)
  const maxButtons = 4

  const pages = getVisiblePages(pageIndex, totalPages, maxButtons)
  const showLeftDots = pageIndex >= 3
  const showRightDots =
    pageIndex <= totalPages - maxButtons && totalPages > maxButtons

  const handlePrevPage = () => onPageChange(pageIndex - 1)
  const handleNextPage = () => onPageChange(pageIndex + 1)
  const handlePageClick = (page: number) => onPageChange(page)

  const isFirstPage = pageIndex === 0
  const isLastPage = pageIndex >= totalPages - 1

  return (
    <S.PaginationRoot>
      <S.PaginationContent>
        <Button
          variant="secondary"
          disabled={isFirstPage}
          onClick={handlePrevPage}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        {showLeftDots && <S.PaginationDots />}
        {pages.map((page) => (
          <Button
            key={page}
            variant={page === pageIndex ? 'default' : 'secondary'}
            disabled={isDisabled(page, isFirstPage, isLastPage, totalPages)}
            onClick={() => handlePageClick(page)}
          >
            {page + 1}
          </Button>
        ))}
        {showRightDots && <S.PaginationDots />}
        <Button
          variant="secondary"
          disabled={isLastPage}
          onClick={handleNextPage}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </S.PaginationContent>
    </S.PaginationRoot>
  )
}
