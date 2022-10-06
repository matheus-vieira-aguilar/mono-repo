import { Product as CommonProduct } from '@mono-node/common/entity';

export default class Product extends CommonProduct {
  description?: string;

  constructor(description?: string) {
    super();

    this.description = description;
  }
}
