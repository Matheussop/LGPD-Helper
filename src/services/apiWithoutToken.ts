import axios from 'axios';
const api = axios.create({
  // baseURL: 'http://10.0.2.2:3737', // Android Studio
  baseURL: 'http://192.168.15.11:3737', // Celular Físico
});

export default api;