import axios from 'axios';

const api = axios.create({
  baseURL: 'https://eu-reciclo.herokuapp.com',
});

export default api;
