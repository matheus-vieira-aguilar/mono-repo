import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import IHttpClient from './IHttpClient';

export type AxiosReturnType = AxiosResponse | undefined;

const success = ({ data }: AxiosResponse) => data;
const failure = () => undefined;

export abstract class BaseClient implements IHttpClient<AxiosReturnType> {
  private axiosClient: AxiosInstance | undefined;

  constructor(configObject: AxiosRequestConfig) {
    this.configure(configObject);
  }

  get(url: string, config?: object): Promise<AxiosReturnType> {
    const ax = config || {};
    return this.axiosClient!.get(url, ax).then(success).catch(failure);
  }

  put(
    url: string,
    data: object,
    config: object = {}
  ): Promise<AxiosReturnType> {
    return this.axiosClient!.put(url, data, config)
      .then(success)
      .catch(failure);
  }

  post(
    url: string,
    data: object,
    config: object = {}
  ): Promise<AxiosReturnType> {
    return this.axiosClient!.post(url, data, config)
      .then(success)
      .catch(failure);
  }

  configure(configObject: object) {
    this.axiosClient = axios.create(configObject);
  }
}
