import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieById, updateMovie } from '../../services/movieService';
import { Movie } from '../../types/movie';
import { deleteMovie } from '../../services/movieService';
import { formatCurrency } from '../../utils/formatCurrency';
import { formatMinutesToHours } from '../../utils/formatMinutes';
import { IoArrowBackCircle } from "react-icons/io5";
import ReactPlayer from 'react-player/youtube';
import { toast } from 'react-toastify';

import * as S from "./styles"
import Button from '../../components/Button/style';
import { formatDate } from '../../utils/formatDate';
import ModalDelete from '../../components/ModalDelete';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [modalCancel, setModalCancel] = useState(false);

  const [formData, setFormData] = useState<{
    title: string;
    genre: string;
    duration: string;
    description: string;
    budget: string;
    releaseDate: string;
    imageUrl: string;
    coverImage?: File;
    trailerUrl: string;
    producer: string;
    country: string;
  }>({
    title: '',
    genre: '',
    duration: '',
    description: '',
    budget: '',
    releaseDate: '',
    imageUrl: '',
    trailerUrl: '',
    producer: '',
    country: '',
  });

  const navigate = useNavigate();
  

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await getMovieById(id!);
        setMovie(data);
        setFormData({
          title: data.title,
          genre: data.genre,
          duration: data.duration,
          description: data.description,
          budget: data.budget,
          releaseDate: data.releaseDate.slice(0, 10),
          imageUrl: data.imageUrl,
          trailerUrl: data.trailerUrl,
          producer: data.producer,
          country: data.country
        });
      } catch (error) {
        console.error('Erro ao buscar detalhes do filme:', error);
      }
    };

    fetchMovie();
  }, [id]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      const data = new FormData();
      data.append('title', formData.title);
      data.append('genre', formData.genre);
      data.append('duration', formData.duration);
      data.append('description', formData.description);
      data.append('budget', formData.budget);
      data.append('releaseDate', formData.releaseDate)
      data.append('trailerUrl', formData.trailerUrl);
      data.append('producer', formData.producer)
      data.append('country', formData.country);

  
      if (formData.coverImage) {
        data.append('image', formData.coverImage);
      }
  
      await updateMovie(id!, data);
  
      const updated = await getMovieById(id!);
      setMovie(updated);
      setShowModal(false);
    } catch (error) {
      console.error('Erro ao atualizar filme:', error);
    }
  };

  const handleDelete = async () => {
    setModalCancel(true)
  };

  const deletarMovie = async  () => {
    try {
      await deleteMovie(id!);
      toast.success('Filme deletado com sucesso!');
      navigate('/');
    } catch (error) {
      console.error("Erro ao deletar filme:", error);
      toast.error('Erro ao deletar o filme, tente novamente mais tarde.');
    }
  }
  

  if (!movie) return <p>Carregando...</p>;

  return (
    <S.Container>
      <S.ContentInfo>
        <S.ButtonBack
          onClick={() => navigate("/")}
        >
          <IoArrowBackCircle className='icon-back'/>
        </S.ButtonBack>
        
        <S.HeaderInfos>
          <S.TitleArea>
            <S.Title>{movie.title}</S.Title>
            <p>{movie.originalTitle}</p>
          </S.TitleArea>
          

          <S.ActionsMovie>
            <S.DeleteButton onClick={handleDelete}>Deletar</S.DeleteButton>
            <Button width='82px' onClick={() => setShowModal(true)}>Editar</Button>
          </S.ActionsMovie>
        </S.HeaderInfos>
        

        <S.InfoMovie>
          <S.LeftInfoMovie>
            <S.Image src={movie.imageUrl} alt={movie.title} />
            <S.DesciptionMovie>
              <S.StatisticsTitle>SINOPSE:</S.StatisticsTitle>
              <S.Text>{movie.description}</S.Text>

            <S.StatisticGenre>
              <S.StatisticsTitle>GENÊRO:</S.StatisticsTitle>
              <S.Text>{movie.genre}</S.Text>
            </S.StatisticGenre>

            </S.DesciptionMovie>
          </S.LeftInfoMovie>
          

          <S.StatisticsMovie>
            <S.Statistic>
              <S.StatisticsTitle>LANÇAMENTO:</S.StatisticsTitle>
              <S.Text>{formatDate(movie.releaseDate)}</S.Text>
            </S.Statistic>

            <S.Statistic>
              <S.StatisticsTitle>DURAÇÃO:</S.StatisticsTitle>
              <S.Text>{formatMinutesToHours(movie.duration)}</S.Text>
            </S.Statistic>

            <S.Statistic>
              <S.StatisticsTitle>ORÇAMENTO:</S.StatisticsTitle>
              <S.Text>{formatCurrency(movie.budget)}</S.Text>
            </S.Statistic>

            <S.Statistic>
              <S.StatisticsTitle>PAÍS:</S.StatisticsTitle>
              <S.Text>{movie.country}</S.Text>
            </S.Statistic>

            <S.Statistic>
              <S.StatisticsTitle>PRODUTORA:</S.StatisticsTitle>
              <S.Text>{movie.producer}</S.Text>
            </S.Statistic>

          </S.StatisticsMovie>
        </S.InfoMovie>

        <S.SectionTrailer>
          <S.StatisticsTitle>TRAILER:</S.StatisticsTitle>

          <ReactPlayer url={movie.trailerUrl} width="100%" height="700px" controls />
        </S.SectionTrailer>


        {modalCancel && (
          <ModalDelete
            onConfirmDelete={deletarMovie}
            onCancel={() => setModalCancel(false)}
          />
        )}


    
        {showModal && (
          <S.ModalOverlay>
            <S.ModalContent>
              <S.ModalTitle>Editar Filme</S.ModalTitle>
    
              <S.Input
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Title"
              />
    
              <S.Select name="genre" value={formData.genre} onChange={handleInputChange}>
                <option value="">Selecione o Genêro</option>
                <option value="Ação">Ação</option>
                <option value="Comédia">Comédia</option>
                <option value="Ficção">Ficção</option>
                <option value="Animação">Animação</option>
              </S.Select>
    
              <S.Input
                name="duration"
                value={formData.duration}
                onChange={handleInputChange}
                placeholder="Duração"
              />
    
              <S.Input
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                placeholder="Orçamento"
              />
    
              <S.Input
                name="releaseDate"
                type="date"
                value={formData.releaseDate}
                onChange={handleInputChange}
              />
    
              <S.TextArea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Descrição"
              />
    
              <S.FileInput
                type="file"
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    setFormData({ ...formData, coverImage: e.target.files[0] });
                  }
                }}
              />
    
              <S.ModalActions>
                <S.ButtonCancel onClick={() => setShowModal(false)}>Cancelar</S.ButtonCancel>
                <Button width='125px' onClick={handleSave}>Salvar</Button>
              </S.ModalActions>
            </S.ModalContent>
          </S.ModalOverlay>
        )}
      </S.ContentInfo>
    </S.Container>
  );
  
};

export default MovieDetails;
