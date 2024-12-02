import { DataSource } from 'typeorm';
import { Product } from '@modules/models/product';

const AppTestDataSource = new DataSource({
    type: 'sqlite',
    database: './database-test.sqlite',
    entities: [Product],
    synchronize: true,

});

export default AppTestDataSource;
