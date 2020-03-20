import axios from 'axios';

const api = axios.create({ baseURL: 'http://206.189.225.180:8080' });

export default api;
