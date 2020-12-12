import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
});

instance.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error),
);
export default instance;
