import api from "@/api/api";


const movieDeleteApi = async (id: number | undefined) => {
  try {
    const token = localStorage.getItem("access_token");
    if (!token) {
      throw new Error("Token de autenticação não encontrado");
    }
    const response = await api.delete(`/movie/${id}`, {
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
}

export default movieDeleteApi