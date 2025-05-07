export interface Movie {
    id: string;
    title: string;
    originalTitle: string;
    description: string;
    releaseDate: string;
    duration: number;
    budget?: number;
    imageUrl?: string;
    userId: string;
    genre: string;
    score: number;
  }
  