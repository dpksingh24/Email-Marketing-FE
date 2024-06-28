import axios from 'axios';

export const register = async (userData) => {
  const response = await axios.post('http://localhost:3001/api/auth/register', userData);
  return response.data;
};

export const login = async (userData) => {
  const response = await axios.post('http://localhost:3001/api/auth/login', userData);
  return response.data;
};
