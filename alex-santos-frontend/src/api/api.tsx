import axios from "axios";

const accessToken = localStorage.getItem("access_token");
const api = axios.create({
  baseURL: "http://localhost:3001/api/v1",
  headers: {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  },
});

export default api;