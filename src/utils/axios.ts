import axios from 'axios';

const request = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const requestAuth = (token : string) => axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default request;
