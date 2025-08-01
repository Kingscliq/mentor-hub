import { env, getAuthToken } from '@/lib/config';
import axios from 'axios';
import type { InternalAxiosRequestConfig } from 'axios';

const defaultConfig = {
  timeout: 60000,
};

const parseToken = (config: InternalAxiosRequestConfig) => {
  // Match root, /login, or /register
  const regex = /^\/(login|register)?$/;
  if (!regex.test(config.url as string)) {
    if (config.headers) {
      config.headers.Authorization = `Bearer ${getAuthToken()}`;
    }
  }
  return config;
};

export const client = axios.create({
  baseURL: env.BASE_URL,
  ...defaultConfig,
});

// Set up response interceptor
client.interceptors.response.use(response => Promise.resolve(response));

// Set up request interceptor
client.interceptors.request.use(parseToken);
