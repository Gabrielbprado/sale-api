import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import ProductController from '../controller/ProductController';
const productRouter = Router();
const productController = new ProductController();

productRouter.get('/', productController.index);

productRouter.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
            description: Joi.string().required(),
            price: Joi.number().precision(2).required(),
            quantity: Joi.number().required(),
        },
    }),
    productController.Create,
);

export default productRouter;