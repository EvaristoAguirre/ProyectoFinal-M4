import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Order } from "./order.entity";
import { OrdersController } from "./order.controller";
import { OrderService } from "./order.service";
import { OrderRepository } from "./order.repository";
import { User } from "src/Users/user.entity";
import { OrderDetails } from "./orderDetails.entity";
import { Product } from "src/Products/product.entity";

@Module({
    imports: [TypeOrmModule.forFeature([User, Order, OrderDetails, Product])], 
    controllers:[OrdersController],
    providers:[OrderService, OrderRepository],
})
export class OrderModule {}
