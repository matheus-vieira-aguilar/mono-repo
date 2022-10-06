import ProductRepository from '../../infra/repository/ProductRepository';
import { LoremIpsum } from "lorem-ipsum";
import Product from '../entity/Product';

export default class AddDescription {
  constructor(private readonly repository: ProductRepository) {}

  async execute(): Promise<Product[]> {
    const products = await this.repository.getProduct()

    const lorem = new LoremIpsum({
      sentencesPerParagraph: {
        max: 8,
        min: 4
      },
      wordsPerSentence: {
        max: 16,
        min: 4
      }
    });

    products.forEach(product => {
      product.description = lorem.generateSentences(1);
    })

    return products;
  }
}
