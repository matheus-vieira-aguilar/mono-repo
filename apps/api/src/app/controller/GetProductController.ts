import GetProduct from '../domain/use-case/GetProduct';

export default class GetProductController {
  handle(request: object): object {
    const usecase = new GetProduct();
    return usecase.execute();
  }
}
