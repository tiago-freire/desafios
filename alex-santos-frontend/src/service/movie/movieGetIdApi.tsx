import api from "@/api/api";
import { IMovie } from "@/types/IMovie/IMovie";

const movieGetIdApi = async (id: number | undefined): Promise<IMovie> => {
  try {
    const token = localStorage.getItem("access_token");
    if (!token) {
      throw new Error("Token de autenticação não encontrado");
    }
    const response = await api.get(`/movie/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default movieGetIdApi;
