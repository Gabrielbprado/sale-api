import AppDataSource from '@shared/typeorm/database';
import { Product } from '../../models/product';

class GetProductService {
    public async execute(): Promise<Product[]> {
        const productsRepository = AppDataSource.getRepository(Product);

            const products = await productsRepository.find();
            console.log("products");
            return products;
        }
}

export default GetProductService;