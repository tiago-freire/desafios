export const status = {
  LANCADO: 'Lançado',
  EM_PRODUCAO: 'Em produção',
  CANCELADO: 'Cancelado',
  ANUNCIADO: 'Anunciado',
  POS_PRODUCAO: 'Pós produção'
} as const

type StatusType = keyof typeof status

export const getStatus = (statusValue: string): string => {
  return status[statusValue as StatusType] ?? 'Status desconhecido'
}
