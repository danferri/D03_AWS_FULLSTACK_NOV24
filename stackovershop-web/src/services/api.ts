import axios from 'axios';

const api = axios.create({  
  baseURL: 'http://18.219.66.53:3000/'
});

export default api;
