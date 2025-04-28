import api from "@/api/api";
import { IMovie } from "@/types/IMovie/IMovie";

const movieCreateApi = async (movie: IMovie) => {
  try {
    const formData = new FormData();
    if (movie.cape && movie.cape[0]) {
      formData.append("cape", movie.cape[0]);
    }

    if (movie.banner && movie.banner[0]) {
      formData.append("banner", movie.banner[0]);
    }

    formData.append("title", movie.title);
    formData.append("titleOriginal", movie.titleOriginal);
    formData.append("description", movie.description);
    formData.append("sinopse", movie.sinopse);
    formData.append("popularity", movie.popularity.toString());
    formData.append("votes", movie.votes.toString());
    formData.append("situation", movie.situation);
    formData.append("language", movie.language.join(","));
    formData.append("launchDate", movie.launchDate);
    formData.append("genre", movie.genre.join(","));
    formData.append("budget", movie.budget.toString());
    formData.append("revenue", movie.revenue.toString());
    formData.append("profit", movie.profit.toString());
    formData.append("duration", movie.duration.toString());
    formData.append("trailer", movie.trailer);

    const token = localStorage.getItem("access_token");
    if (!token) {
      throw new Error("Token de autenticação não encontrado");
    }
    const response = await api.post("/movie/create", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export default movieCreateApi;