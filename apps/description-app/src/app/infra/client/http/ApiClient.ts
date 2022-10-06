import { BaseClient } from '@mono-node/http';

export default class ApiClient extends BaseClient {
  constructor() {
    super({ baseURL: process.env.API_URL || '' });
  }
}
