import axios, { AxiosInstance } from "axios";
import { HttpAdapter } from "./http.adapter";

interface Options {
  baseUrl: string;
  params: Record<string, string>;
  headers?: Record<string, string>;
}

export class AxiosAdapter implements HttpAdapter {
  private axiosInstance: AxiosInstance;

  constructor(options: Options) {
    this.axiosInstance = axios.create({
      baseURL: options.baseUrl,
      params: options.params,
      headers: options.headers,
    });
  }

  async get<T>(url: string, options?: Record<string, unknown>): Promise<T> {
    try {
      const { data } = await this.axiosInstance.get(url, options);
      return data;
    } catch (error: any) {
      if (error.response && error.response.data) {
        throw error.response.data;
      }
      throw new Error(`Error fetching GET: ${url}`);
    }
  }

  async post<T>(
    url: string,
    body: unknown,
    options?: Record<string, unknown>
  ): Promise<T> {
    try {
      const { data } = await this.axiosInstance.post(url, body, options);
      return data;
    } catch (error: any) {
      if (error.response && error.response.data) {
        throw error.response.data;
      }
      throw new Error(`Error fetching POST: ${url}`);
    }
  }
}
