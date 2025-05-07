import { prisma } from '../prisma/client';
import { resend } from '../services/resend';

export interface CreateMovieData {
  title: string;
  originalTitle: string;
  description: string;
  releaseDate: string;
  duration: string;
  budget?: string;
  genre: string;
  trailerUrl: string;
  producer: string;
  country: string;
  imageUrl: string;
  userId: string;
}


export interface UpdateMovieData {
  title?: string;
  originalTitle?: string;
  description?: string;
  releaseDate?: string;
  duration?: string;
  budget?: string;
  genre?: string;
  imageUrl?: string;
  trailerUrl?: string;
  producer?: string;
  country?: string;
}


export interface MovieFilters {
  page?: string;
  limit?: string;
  minDuration?: string;
  maxDuration?: string;
  startDate?: string;
  endDate?: string;
  title?: string;
  genre?: string;
}


export interface PaginatedMovieResult {
  status: boolean;
  page: number;
  totalPages: number;
  totalItems: number;
  items: any[];
}


class MovieService {
  async createMovie(movieData: CreateMovieData, fileUploaded: boolean): Promise<any> {
    try {
      const {
        title,
        originalTitle,
        description,
        releaseDate,
        duration,
        budget,
        genre,
        trailerUrl,
        producer,
        country,
        imageUrl,
        userId
      } = movieData;

      if (!userId) {
        throw new Error('User ID is required');
      }

      const finalImageUrl = fileUploaded ? movieData.imageUrl : imageUrl;
      const parsedReleaseDate = new Date(releaseDate);
      const now = new Date();

      const movie = await prisma.movie.create({
        data: {
          title,
          originalTitle,
          description,
          releaseDate: parsedReleaseDate,
          duration: Number(duration),
          budget: budget ? Number(budget) : null,
          genre,
          imageUrl: finalImageUrl,
          trailerUrl,
          producer,
          country,
          userId,
        },
      });

      if (parsedReleaseDate > now) {
        await this.sendNewMovieEmail(title, duration, parsedReleaseDate);
      }

      return movie;
    } catch (error) {
      console.error('Error in createMovie service:', error);
      throw error;
    }
  }
  

  private async sendNewMovieEmail(title: string, duration: string, releaseDate: Date): Promise<void> {
    try {
      await resend.emails.send({
        from: 'Filme Cadastrado! <onboarding@resend.dev>',
        to: ['juaopinheiro26@gmail.com'],
        subject: `Novo filme cadastrado: ${title}`,
        html: `
          <h2>Filme criado com sucesso!</h2>
          <p><strong>Título:</strong> ${title}</p>
          <p><strong>Duração:</strong> ${duration} minutos</p>
          <p><strong>Data de lançamento:</strong> ${releaseDate.toLocaleDateString()}</p>
        `
      });
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }


  async getMovies(filters: MovieFilters): Promise<PaginatedMovieResult> {
    try {
      const {
        page = '1',
        limit = '10',
        minDuration,
        maxDuration,
        startDate,
        endDate,
        title,
        genre
      } = filters;

      const currentPage = parseInt(page, 10);
      const perPage = parseInt(limit, 10);
      const skip = (currentPage - 1) * perPage;

      const queryFilters: any = {};

      if (minDuration || maxDuration) {
        queryFilters.duration = {
          ...(minDuration && { gte: Number(minDuration) }),
          ...(maxDuration && { lte: Number(maxDuration) })
        };
      }

      if (startDate || endDate) {
        queryFilters.releaseDate = {
          ...(startDate && { gte: new Date(startDate) }),
          ...(endDate && { lte: new Date(endDate) })
        };
      }

      if (genre) {
        queryFilters.genre = genre;
      }

      if (title) {
        queryFilters.title = {
          contains: title,
          mode: 'insensitive'
        };
      }

      const movies = await prisma.movie.findMany({
        where: queryFilters,
        skip,
        take: perPage,
        orderBy: { releaseDate: 'desc' }
      });

      const total = await prisma.movie.count({ where: queryFilters });

      return {
        status: true,
        page: currentPage,
        totalPages: Math.ceil(total / perPage),
        totalItems: total,
        items: movies
      };
    } catch (error) {
      console.error('Error in getMovies service:', error);
      throw new Error('Erro ao buscar filmes');
    }
  }

  async getMovieById(movieId: number): Promise<any> {
    try {
      if (isNaN(movieId)) {
        throw new Error('ID inválido');
      }

      const movie = await prisma.movie.findUnique({
        where: { id: movieId },
      });

      if (!movie) {
        throw new Error('Filme não encontrado');
      }

      return movie;
    } catch (error) {
      console.error('Error in getMovieById service:', error);
      throw error;
    }
  }

  async updateMovie(movieId: number, updateData: UpdateMovieData, fileUploaded: boolean): Promise<any> {
    try {
      if (isNaN(movieId)) {
        throw new Error('ID inválido');
      }

      const {
        title,
        genre,
        duration,
        description,
        budget,
        releaseDate,
        imageUrl
      } = updateData;

      const finalImageUrl = fileUploaded ? updateData.imageUrl : imageUrl;

      const dataToUpdate: any = {};

      if (title !== undefined) dataToUpdate.title = title;
      if (genre !== undefined) dataToUpdate.genre = genre;
      if (duration !== undefined) dataToUpdate.duration = Number(duration);
      if (description !== undefined) dataToUpdate.description = description;
      if (budget !== undefined) dataToUpdate.budget = budget ? Number(budget) : null;
      if (releaseDate !== undefined) dataToUpdate.releaseDate = new Date(releaseDate);
      if (finalImageUrl !== undefined) dataToUpdate.imageUrl = finalImageUrl;

      const movie = await prisma.movie.update({
        where: { id: movieId },
        data: dataToUpdate,
      });

      return movie;
    } catch (error) {
      console.error('Error in updateMovie service:', error);
      throw error;
    }
  }

  async deleteMovie(movieId: number): Promise<void> {
    try {
      if (isNaN(movieId)) {
        throw new Error('ID inválido');
      }

      await prisma.movie.delete({
        where: { id: movieId },
      });
    } catch (error) {
      console.error('Error in deleteMovie service:', error);
      throw error;
    }
  }
}

export default new MovieService();