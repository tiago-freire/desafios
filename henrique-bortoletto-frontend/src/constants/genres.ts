export const genres = [
  {
    value: 'ACAO',
    label: 'Ação'
  },
  {
    value: 'AVENTURA',
    label: 'Aventura'
  },
  {
    value: 'FICCAO_CIENTIFICA',
    label: 'Ficção Científica'
  },
  {
    value: 'DRAMA',
    label: 'Drama'
  },
  {
    value: 'COMEDIA',
    label: 'Comédia'
  },
  {
    value: 'TERROR',
    label: 'Terror'
  }
] as const

export const formatGenres = (movieGenres: string[]) => {
  return movieGenres.map((genre) => {
    const foundGenre = genres.find((g) => g.value === genre)
    return foundGenre ? foundGenre.label : genre
  })
}
