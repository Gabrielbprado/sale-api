import GetProductService from '../service/GetProductsService';
import CreateProductService from '../service/CreateProductService';
import { Request, Response } from 'express';
export default class ProductController
{
    public async index(req: Request, res: Response): Promise<void>
    {
        const getProductsService = new GetProductService();
        const products = await getProductsService.execute();
        res.json(products);
    }

    public async Create(req: Request, res: Response): Promise<void>
    {
        const { name, description, price, quantity } = req.body;
        const createProductService = new CreateProductService();
        const product = await createProductService.execute({ name, description, price, quantity });
        console.log("product");
        console.log(product);
        res.status(201).json(product);
    }
}

