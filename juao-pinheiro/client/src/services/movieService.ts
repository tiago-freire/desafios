import api from './api';

export interface MoviePayload {
    title: string;
    description: string;
    year: number;
    coverImage?: File | string; 
}

interface Params {
    page: number;
    search: string;
    minDuration?: number;
    maxDuration?: number;
    startDate?: string;
    endDate?: string;
    genre?: string;
}


export const getMovies = async (params?: { title?: string }) => {
  const response = await api.get('/movies', { params });
  return response.data;
};

export const getAllMovies = async (params: Params) => {
    const response = await api.get('/movies', { params });
  
    return {
      data: response.data.items,
      totalPages: response.data.totalPages
    };
};

export const getMovieById = async (id: string) => {
  const response = await api.get(`/movies/${id}`);
  return response.data;
};

export const createMovie = async (data: MoviePayload) => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('year', data.year.toString());
  
    if (data.coverImage instanceof File) {
      formData.append('coverImage', data.coverImage);
    }
  
    const response = await api.post('/movies', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  
    return response.data;
  };

  export const updateMovie = async (id: string, data: FormData) => {
    const response = await api.put(`/movies/${id}`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  };

 export const uploadImage = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append('file', file);
  
    const token = localStorage.getItem('token');
  
    const response = await api.post('/movies/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    });
  
    return response.data.imageUrl;
  };
  

  export const deleteMovie = async (id: string) => {
    const token = localStorage.getItem('token');
    if (!token) throw new Error("Token não encontrado");
  
    await api.delete(`/movies/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };