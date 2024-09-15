import axios, { AxiosInstance } from 'axios';
import storageService from './storage.ts';
import FEDHA_TOKEN_KEY from '../constants.ts';

class ApiService {
  private static _instance: ApiService;
  readonly client: AxiosInstance;

  constructor() {
    console.log(import.meta.env.VITE_API_SERVER_URL);
    this.client = axios.create({
      baseURL: import.meta.env.VITE_API_SERVER_URL,
      timeout: 5000
    });

    const payload = storageService.getValueFromStorage(FEDHA_TOKEN_KEY);
    if (payload) {
      this.client.defaults.headers = {
        ...this.client.defaults.headers,
        Authorization: payload
      };
    }
  }

  static getInstance = (): ApiService =>
    this._instance || (this._instance = new this());
}

const api = ApiService.getInstance();

export default api;
