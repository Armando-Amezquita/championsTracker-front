// import { THE_MOVIE_DB_KEY } from '@env';
// import { AxiosAdapter } from './http/axios.adapter';
import { AxiosAdapter } from "../config/adapters/http/axios.adapter";

const API_BASE_URL = "http://192.168.1.24:7002/api";
// 192.168.1.20

export const authFetcher = new AxiosAdapter({
  baseUrl: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    // api_key: "http://localhost:7002",
    // api_key: 'ddf17c3a5b653c45486fa621d3dc3b91',
  },
});
