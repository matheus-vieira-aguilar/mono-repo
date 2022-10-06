import Product from '../src/app/domain/entity/Product';
import AddDescription from '../src/app/domain/use-case/AddDescription';
import ApiClient from '../src/app/infra/client/http/ApiClient';
import ProductRepository from '../src/app/infra/repository/ProductRepository';

describe('test MatchTemplate use-case', () => {
  it('description should be defined', async () => {
    const useCase = new AddDescription(new ProductRepository(new ApiClient()));

    const mockfun = async (): Promise<Product[]> => {
      return [{ id: 'teste' }];
    };

    const spy = jest
      .spyOn(ProductRepository.prototype, 'getProduct')
      .mockImplementationOnce(mockfun);

    const product = await useCase.execute();

    expect(product[0].description).toBeDefined();
    
  });
});
