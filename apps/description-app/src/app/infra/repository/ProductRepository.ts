import Product from '../../domain/entity/Product';
import ApiClient from '../client/http/ApiClient';

export default class ProductRepository {
  constructor(private client: ApiClient) {}

  async getProduct(): Promise<Product[]> {
    const result = await this.client.get('/api');

    return result as unknown as Product[];
  }
}
