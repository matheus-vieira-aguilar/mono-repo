export default interface IHttpClient<T> {
  get(url: string): Promise<T>;
  put(url: string, data: object): Promise<T>;
  post(url: string, data: object): Promise<T>;
}
