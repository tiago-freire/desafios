import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import { Input } from '@/components/ui/input'
import { Filters } from '@/components/Filters'
import { Create } from '@/components/Movie/Create'

import { useDebounce } from '@/hooks/use-debounce'

export function Search() {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()
  const debouncedQuery = useDebounce(searchQuery, 500)

  useEffect(() => {
    const params = new URLSearchParams(searchParams)

    if (debouncedQuery.length >= 3) {
      params.set('q', debouncedQuery)
    } else {
      params.delete('q')
    }

    setSearchParams(params)
  }, [debouncedQuery, searchParams, setSearchParams])

  return (
    <div className="flex flex-col md:flex-row gap-2.5 py-6 ml-auto md:w-fit w-full">
      <Input
        type="text"
        placeholder="Pesquise por filmes"
        className="w-full md:w-96"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="flex gap-2.5">
        <Filters />
        <Create />
      </div>
    </div>
  )
}
