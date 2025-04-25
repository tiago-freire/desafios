export interface IMovie {
  id: number;
  title: string;
  titleOriginal: string;
  description: string;
  sinopse: string;
  popularity: number;
  votes: number;
  situation: string;
  language: string[];
  launchDate: string;
  genre: string[];
  budget: number;
  revenue: number;
  profit: number;
  duration: number;
  cape: string ;
  banner: string | null;
  trailer: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}
