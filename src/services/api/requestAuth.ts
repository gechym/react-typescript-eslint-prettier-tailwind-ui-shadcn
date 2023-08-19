/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import axios, { type AxiosResponse, type InternalAxiosRequestConfig } from 'axios';

const requestAuth = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});
// [Function]
const setLocalToken = (key : string, value : object) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getLocalToken = (key : string) => {
  const item = localStorage.getItem(key) || '';
  return JSON.parse(item);
};

// [configRequest]

const configRequest = (config : InternalAxiosRequestConfig<any>) => config;
const onRejectedRequest = (error: any) => Promise.reject(error);
requestAuth.interceptors.request.use(configRequest, onRejectedRequest);

// [configResponse]

const configResponse = (config : AxiosResponse<any, any>) => config;
const onRejectedResponse = (error: any) => Promise.reject(error);
requestAuth.interceptors.response.use(configResponse, onRejectedResponse);

export default requestAuth;
