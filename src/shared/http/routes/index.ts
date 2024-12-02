import { Router } from 'express';
import productsRouter from '@modules/product/routes/ProductRouter';

const routes = Router();

routes.use('/products', productsRouter);
export default routes;