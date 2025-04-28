import api from "@/api/api";
import { IAuth } from "@/types/IAuth/IAuth";

const auth = async (data: IAuth) => {
  try {
    const response = await api.post("/auth", {
      email: data.email,
      password: data.password,
    });
    localStorage.setItem("access_token", response.data.access_token);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default auth;
