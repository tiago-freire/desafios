import api from "@/api/api";
import { IMovie } from "@/types/IMovie/IMovie";



export interface IMovieGetAll {
  total: number
  page: number
  limit: number
  totalPages: number
  data: IMovie[]
}



const movieGetAllApi = async (page?:number , limit?:10 , title?:string): Promise<IMovieGetAll> => {
  try {
    const token = localStorage.getItem("access_token");
    if (!token) {
      throw new Error("Token de autenticação não encontrado");
    }
    const response = await api.get("/movie", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      params:{
        title,
        page,
        limit
      }
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default movieGetAllApi;
