import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const signup = async (email: string, password: string, firstName: string, lastName: string) => {
  const response = await axios.post(`${API_URL}/signup`, { email, password, firstName, lastName });
  localStorage.setItem("token", response.data.token);
  return response.data;
};

export const login = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  localStorage.setItem("token", response.data.token);
  return response.data;
};


