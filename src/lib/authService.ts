import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
export const signup = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/signup`, { email, password });
  localStorage.setItem("token", response.data.token);
  return response.data;
};

export const login = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  localStorage.setItem("token", response.data.token);
  return response.data;
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const getCurrentUser = async () => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("No token found");

  const response = await axios.get(`${API_URL}/current`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
