import api from "@/api/api";
import { IRegisterUser } from "@/types/IAuth/IRegisterUser";

const registerUserApi = async (data: IRegisterUser) => {
  try {
    const token = localStorage.getItem("access_token");
    if (!token) {
      throw new Error("Token de autenticação não encontrado");
    }
    const response = await api.post(
      "/user/create",
      {
        name: data.name,
        email: data.email,
        password: data.password,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default registerUserApi;
