import api from './api';

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  nome: string;
  email: string;
  password: string;
}

export const loginUser = async (data: LoginPayload) => {
  const response = await api.post('auth/login', data);
  return response.data;
};

export const registerUser = async (data: RegisterPayload) => {
  const response = await api.post('auth/register', data);
  return response.data;
};

export const getUsers = async () => {
  const response = await api.get('/users');
  return response.data;
};
