import { useEffect, useState } from 'react';
import * as S from './style';
import Button from '../Button/style';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onApply: (filters: Filters) => void;
  currentFilters: Filters;
}

export interface Filters {
  minDuration?: number;
  maxDuration?: number;
  startDate?: string;
  endDate?: string;
  genre?: string;
}


export const ModalFilter: React.FC<Props> = ({ isOpen, onClose, onApply, currentFilters }) => {
  const [filters, setFilters] = useState<Filters>({});

  useEffect(() => {
    if (isOpen) {
      setFilters(currentFilters);
    }
  }, [isOpen, currentFilters]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: type === 'number' ? Number(value) : value
    }));
  };

  const applyFilters = () => {
    onApply(filters);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <S.Overlay>
      <S.Modal>
        <S.Title>Filtros</S.Title>

        <S.Input name="minDuration" value={filters.minDuration || ''} placeholder="Duração mínima" type="number" onChange={handleChange} />
        <S.Input name="maxDuration" value={filters.maxDuration || ''} placeholder="Duração máxima" type="number" onChange={handleChange} />
        <S.Input name="startDate" value={filters.startDate || ''} type="date" onChange={handleChange} />
        <S.Input name="endDate" value={filters.endDate || ''} type="date" onChange={handleChange} />

        <S.Select name="genre" value={filters.genre || ''} onChange={handleChange}>
          <option value="">Todos os Gêneros</option>
          <option value="Ação">Ação</option>
          <option value="Comédia">Comédia</option>
          <option value="Ficção">Ficção</option>
          <option value="Animação">Animação</option>
        </S.Select>

        <S.ButtonRow>
          <S.ButtonCancel onClick={onClose}>Cancelar</S.ButtonCancel>
          <Button width='140px' onClick={applyFilters}>Aplicar</Button>
        </S.ButtonRow>
      </S.Modal>
    </S.Overlay>
  );
};

