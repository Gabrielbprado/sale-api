import "reflect-metadata"
import { DataSource } from "typeorm"
import { Product } from "@modules/models/product"

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "docker",
    database: "sale-api",
    entities: [Product],
    synchronize: true,
    logging: false,
    migrations: ["src/shared/typeorm/migrations/*.ts"],
})

export default AppDataSource;