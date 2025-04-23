import axios from "axios";

export const API_KEY = process.env.TMDB_API_KEY;
export const BASE_URL = "https://api.themoviedb.org/3";
export const BASE_LANG = "pt-BR";

export const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json;charset=utf-8",
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
  params: {
    language: BASE_LANG,
  },
});
