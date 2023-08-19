/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import axios, { type AxiosResponse, type InternalAxiosRequestConfig } from 'axios';

const requestAuth = axios.create({
  baseURL: 'http://localhost:5000',
});
// [Function]
const setLocalToken = (key : string, value : string) => {
  localStorage.setItem(key, value);
};

const getLocalToken = (key : string) => {
  const item = localStorage.getItem(key) || '';
  return item;
};

const configRequest = (config : InternalAxiosRequestConfig<any>) => {
  if (config.url === 'login') {
    return config;
  }

  const accessToken = getLocalToken('accessToken');
  if (accessToken) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Beare ${accessToken}`;
    return config;
  }

  return config;
};
const onRejectedRequest = (error: any) => Promise.reject(error);

// [configRequest]
requestAuth.interceptors.request.use(configRequest, onRejectedRequest);

const configResponse = async (response : AxiosResponse<any, any>) => {
  const configReq = response.config;
  if (configReq.url === 'login') {
    const res = response.data;
    setLocalToken('accessToken', res.accessToken);
    setLocalToken('refreshToken', res.refreshToken);
  }

  if (response.data.error === 'jwt expired') {
    const res = await requestAuth.post('/refreshToken', {
      refreshToken: getLocalToken('refreshToken'),
    });
    configReq.headers.Authorization = res.data.accessToken;
    setLocalToken('accessToken', res.data.accessToken);
    return requestAuth(configReq);
  }

  return response;
};
const onRejectedResponse = (error: any) => Promise.reject(error);

// [configResponse]
requestAuth.interceptors.response.use(configResponse, onRejectedResponse);

export default requestAuth;
