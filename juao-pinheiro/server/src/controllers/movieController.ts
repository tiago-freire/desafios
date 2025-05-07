import { Request, Response } from 'express';
import movieService from '../services/movieService';

interface AuthenticatedRequest extends Request {
  user?: {
    userId: string;
  };
}

export const createMovie = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId } = (req as AuthenticatedRequest).user || {};

    if (!userId) {
      res.status(401).json({ error: 'Usuário não autenticado.' });
      return;
    }

    const movieData = {
      ...req.body,
      userId
    };

    const fileUploaded = !!req.file;
    const movie = await movieService.createMovie(movieData, fileUploaded);
    
    res.status(201).json(movie);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
    console.error('Controller error in createMovie:', error);
    res.status(500).json({ 
      error: 'Erro ao criar filme', 
      details: errorMessage 
    });
  }
};


export const getMovies = async (req: Request, res: Response): Promise<void> => {
  try {
    const filters = req.query;
    const result = await movieService.getMovies(filters);
    
    res.status(200).json(result);
  } catch (error) {
    console.error('Controller error in getMovies:', error);
    res.status(400).json({
      status: false,
      message: "Filmes não encontrados"
    });
  }
};

export const getMovieById = async (req: Request, res: Response): Promise<void> => {
  try {
    const movieId = Number(req.params.id);
    const movie = await movieService.getMovieById(movieId);
    
    res.status(200).json(movie);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
    console.error('Controller error in getMovieById:', error);
    
    if (errorMessage === 'Filme não encontrado') {
      res.status(404).json({ error: errorMessage });
    } else if (errorMessage === 'ID inválido') {
      res.status(400).json({ error: errorMessage });
    } else {
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
};

export const updateMovie = async (req: Request, res: Response): Promise<void> => {
  try {
    const movieId = Number(req.params.id);
    const fileUploaded = !!req.file;
    
    const movie = await movieService.updateMovie(movieId, req.body, fileUploaded);
    
    res.status(200).json(movie);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
    console.error('Controller error in updateMovie:', error);
    
    if (errorMessage === 'ID inválido') {
      res.status(400).json({ error: errorMessage });
    } else {
      res.status(500).json({ message: 'Erro ao atualizar filme.' });
    }
  }
};
 
export const deleteMovie = async (req: Request, res: Response): Promise<void> => {
  try {
    const movieId = Number(req.params.id);
    await movieService.deleteMovie(movieId);
    
    res.status(204).send();
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
    console.error('Controller error in deleteMovie:', error);
    
    if (errorMessage === 'ID inválido') {
      res.status(400).json({ error: errorMessage });
    } else {
      res.status(500).json({ error: 'Erro ao deletar filme' });
    }
  }
};