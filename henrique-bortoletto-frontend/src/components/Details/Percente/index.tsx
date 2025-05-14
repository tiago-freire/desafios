import * as S from './Base'

export const DetailPercente = () => (
  <S.DetailPercenteRoot>
    <svg viewBox="0 0 36 36" className="rotate-[-90deg] scale-120">
      <circle
        cx="18"
        cy="18"
        r="16"
        fill="none"
        className="stroke-mauve-dark-9 stroke-2"
      />
      <circle
        cx="18"
        cy="18"
        r="16"
        fill="none"
        className="stroke-yellow-400 stroke-2"
        strokeDasharray="67, 100"
      />
    </svg>
    <S.DetailPercenteShadow />
    <S.DetailPercenteText>
      67<span className="text-white text-xs">%</span>
    </S.DetailPercenteText>
  </S.DetailPercenteRoot>
)
