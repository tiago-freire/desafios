export const languages = {
  en: 'Inglês',
  pt: 'Português',
  es: 'Espanhol',
  fr: 'Francês',
  de: 'Alemão',
  it: 'Italiano',
  ja: 'Japonês',
  ko: 'Coreano',
  zh: 'Chinês'
} as const

export type LanguageCode = keyof typeof languages

export const getLanguage = (code: string): string => {
  return languages[code as LanguageCode] ?? 'Idioma desconhecido'
}
