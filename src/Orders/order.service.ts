import { Injectable } from "@nestjs/common";
import { OrderRepository } from "./order.repository";
import { CreateOrderDto } from "./createOrder.dto";

@Injectable()
export class OrderService {
    constructor (
        private readonly orderRepository: OrderRepository
    ){}

    getOrderById(id:string){
        return this.orderRepository.getOrderById(id);
    }

    addOrder( order:CreateOrderDto){
        return this.orderRepository.addOrder(order);
    }
}