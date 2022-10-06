import AddDescription from '../domain/use-case/AddDescription';
import ApiClient from '../infra/client/http/ApiClient';
import ProductRepository from '../infra/repository/ProductRepository';

export default class AddDescriptionController {
  async handle(request: object): Promise<object> {        
    const usecase = new AddDescription(new ProductRepository(new ApiClient()));
    console.log(await usecase.execute())
    return await usecase.execute();
  }
}
