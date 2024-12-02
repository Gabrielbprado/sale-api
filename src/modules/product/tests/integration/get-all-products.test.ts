import request from 'supertest';
import app from '@shared/http/server';
import AppTestDataSource from '@shared/typeorm/database-test';
import {Product} from "@modules/models/product";

beforeAll(async () => {
    if (!AppTestDataSource.isInitialized) {

        await AppTestDataSource.initialize();
    }
    await AppTestDataSource.getRepository(Product).save([
        {
            name: 'Produto 1',
            description: 'Descrição do Produto 1',
            price: 100.0,
            quantity: 10,
        },
        {
            name: 'Produto 2',
            description: 'Descrição do Produto 2',
            price: 50.0,
            quantity: 20,
        },
    ]);
});

afterAll(async () => {
    if (AppTestDataSource.isInitialized) {
        await AppTestDataSource.destroy();
    }
});

describe(`Get All Products`, () => {
    afterEach(async () => {
        const repository = AppTestDataSource.getRepository(Product);
        await repository.clear(); // Limpa todos os registros da tabela Product
    });
    it('should get all products for api', async () => {
        const response = await request(app).get('/products');
        expect(response.status).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);

    });
});