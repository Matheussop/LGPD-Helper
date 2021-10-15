import axios from 'axios';
const api = axios.create({
  // baseURL: 'http://10.0.2.2:3737', // Android Studio
  baseURL: 'http://18.231.146.53', // Back End Deploy
  // baseURL: 'http://192.168.15.11:3333', // Celular Físico
});

export default api; 