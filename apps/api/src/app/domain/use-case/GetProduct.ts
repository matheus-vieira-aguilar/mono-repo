import Product from '../entity/Product';

export default class GetProduct {
  execute(): Product[] {
    const products = [
      { id: '1', name: 'Product1', price: 10 },
      { id: '2', name: 'Product2', price: 20 },
      { id: '3', name: 'Product3', price: 30 },
    ] as Product[];

    return products;
  }
}
