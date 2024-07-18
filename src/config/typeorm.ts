import { config as dotenvConfig } from 'dotenv';
import { registerAs } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { User } from 'src/Users/user.entity';
import { Product } from 'src/Products/product.entity';
import { Category } from 'src/Categories/categories.entity';
import { Order } from 'src/Orders/order.entity';
import { OrderDetails } from 'src/Orders/orderDetails.entity';
import { orderDetails_Products } from 'src/Orders/orderDetails_products.entity';

dotenvConfig({path:'./.env'});

const config = {
    type: 'postgres',
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    //* Configuración extra 
    entities: [User, Product, Category, Order, OrderDetails, orderDetails_Products],
    migrations: ['dist/migrations/*{.ts, .js}'],
    logging: ['errors'],
    synchronize: false,
    dropSchema: false,
};

export const typeOrmConfig = registerAs('typeorm', ()=> config);
export const connectionSource = new DataSource(config as DataSourceOptions);
