export const formatMoney = (value: number) => {
  let suffix = ''
  let scaledValue = value

  if (value >= 1_000_000_000) {
    suffix = 'B'
    scaledValue = value / 1_000_000_000
  }

  if (value >= 1_000_000) {
    suffix = 'M'
    scaledValue = value / 1_000_000
  }

  if (value >= 1_000) {
    suffix = 'K'
    scaledValue = value / 1_000
  }

  const formatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
    minimumFractionDigits: 2
  }).format(scaledValue)

  return `${formatted}${suffix}`
}
