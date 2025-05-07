import { useState } from 'react';
import * as S from "./style";
import api from '../../services/api';
import Button from '../Button/style';
import { toast } from 'react-toastify';
import Loading from '../Loading';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onMovieAdded: (movie: any) => void;
}

export const AddMovieModal: React.FC<Props> = ({ isOpen, onClose, onMovieAdded }) => {
  const [formData, setFormData] = useState({
    title: '',
    originalTitle: '',
    description: '',
    releaseDate: '',
    duration: '',
    budget: '',
    genre: '',
    producer: '',
    country: '',
    coverImage: null as File | null,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [showErrors, setShowErrors] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, coverImage: file }));
  };

  const isFormValid = () => {
    const {
      title, originalTitle, description, releaseDate,
      duration, budget, genre, producer, country
    } = formData;
    return title && originalTitle && description && releaseDate &&
           duration && budget && genre && producer && country;
  };

  const handleSubmit = async () => {
    setShowErrors(true);
    if (!isFormValid()) return;

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        alert('Você precisa estar logado.');
        return;
      }

      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (key === 'coverImage' && value) {
          data.append('image', value);
        } else if (typeof value === 'string') {
          data.append(key, value);
        }
      });

      data.append('trailerUrl', trailerUrl);

      setIsLoading(true)

      const response = await api.post('/movies', data, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      onMovieAdded(response.data);
      toast.success('Filme adicionado com sucesso!');

      onClose();
    } catch (error: any) {
      console.error(error);
      alert(error.response?.data?.error || 'Erro ao adicionar filme');
    }finally{
      setIsLoading(false)
    }
  };

  if (!isOpen) return null;

  return (
    <S.Overlay>
      <S.Modal>
        <S.Title>Adicionar Filme</S.Title>

        <S.Input name="title" placeholder="Título" onChange={handleChange} />
        {showErrors && !formData.title && <S.ErrorText>Preencha o título.</S.ErrorText>}

        <S.Input name="originalTitle" placeholder="Título Original" onChange={handleChange} />
        {showErrors && !formData.originalTitle && <S.ErrorText>Preencha o título original.</S.ErrorText>}

        <S.TextArea name="description" placeholder="Descrição" rows={4} onChange={handleChange} />
        {showErrors && !formData.description && <S.ErrorText>Preencha a descrição.</S.ErrorText>}

        <S.Input name="releaseDate" type="date" onChange={handleChange} />
        {showErrors && !formData.releaseDate && <S.ErrorText>Escolha uma data completa.</S.ErrorText>}

        <S.Input name="duration" placeholder="Duração (min)" type="number" onChange={handleChange} />
        {showErrors && !formData.duration && <S.ErrorText>Informe a duração.</S.ErrorText>}

        <S.Input name="budget" placeholder="Orçamento" type="number" onChange={handleChange} />
        {showErrors && !formData.budget && <S.ErrorText>Informe o orçamento.</S.ErrorText>}

        <S.Input name="producer" placeholder="Produtora" onChange={handleChange} />
        {showErrors && !formData.producer && <S.ErrorText>Informe a produtora.</S.ErrorText>}

        <S.Input name="country" placeholder="País de Origem" onChange={handleChange} />
        {showErrors && !formData.country && <S.ErrorText>Informe o país.</S.ErrorText>}

        <S.Select name="genre" value={formData.genre} onChange={handleChange}>
          <option value="">Selecione um gênero</option>
          <option value="Ação">Ação</option>
          <option value="Comédia">Comédia</option>
          <option value="Ficção">Ficção</option>
          <option value="Animação">Animação</option>
        </S.Select>
        {showErrors && !formData.genre && <p style={{ color: 'red', fontSize: '12px' }}>Escolha um gênero.</p>}

        <S.LinkYoutube>
          <label>Link do Trailer (YouTube)</label>
          <S.Input
            type="text"
            value={trailerUrl}
            onChange={(e) => setTrailerUrl(e.target.value)}
            className="px-3 py-2 rounded text-sm"
            placeholder="Ex: https://www.youtube.com/..."
          />
        </S.LinkYoutube>

        {isLoading && (
          <Loading/>
        )}

        <S.Input type="file" accept="image/*" onChange={handleImageChange} />

        <S.ButtonRow>
          <S.ButtonCancel onClick={onClose}>Cancelar</S.ButtonCancel>
          <Button width='150px' onClick={handleSubmit}>Adicionar Filme</Button>
        </S.ButtonRow>
      </S.Modal>
    </S.Overlay>
  );
};
