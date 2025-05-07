import axios from 'axios';
import { sessionManager } from '../contexts/sessionManager';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

api.interceptors.request.use((config) => {
  const token = sessionManager.getToken();
  
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  
  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      sessionManager.clearSession();
      window.location.href = '/login';
    }
    
    return Promise.reject(error);
  }
);

export default api;