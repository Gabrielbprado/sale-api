import request from 'supertest';
import app from '@shared/http/server';
import AppTestDataSource from '@shared/typeorm/database-test';
import {Product} from "@modules/models/product";

beforeAll(async () => {
    console.log("beforeAll");
    console.log(AppTestDataSource.isInitialized);
    console.log(AppTestDataSource.entityMetadatas);

    if (!AppTestDataSource.isInitialized) {
        await AppTestDataSource.initialize();
    }
});

afterAll(async () => {
    if (AppTestDataSource.isInitialized) {
        await AppTestDataSource.destroy();
    }
});

describe('Create a new Product', () => {
    afterEach(async () => {
        const repository = AppTestDataSource.getRepository(Product);
        await repository.clear();
    });
    it('should create a new product', async () => {
        const newProduct = {
            name: 'Produto Teste 22',
            description: 'Descrição do produto teste',
            price: 50.0,
            quantity: 5,
        };

        const response = await request(app)
            .post('/products')
            .send(newProduct)
            .set('Content-Type', 'application/json');

        expect(response.status).toBe(201);
        expect(response.body).toMatchObject(newProduct);
    });
});
