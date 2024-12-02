import { Product } from '@modules/models/product';
import AppDataSource from "@shared/typeorm/database";

interface IRequest
{
    name: string;
    description: string;
    price: number;
    quantity: number;
}

export default class CreateProductService
{
    async execute({name, description, price, quantity}: IRequest)
    {
        const respository = AppDataSource.getRepository(Product);
        const product = respository.create({
            name,
            description,
            price,
            quantity
        });
        await respository.save(product);
        return product;
    }
}