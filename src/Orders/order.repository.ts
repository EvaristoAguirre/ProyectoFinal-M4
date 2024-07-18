import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Order } from "./order.entity";
import { Repository } from "typeorm";
import { CreateOrderDto } from "./createOrder.dto";
import { User } from "src/Users/user.entity";
import { OrderDetails } from "./orderDetails.entity";
import { Product } from "src/Products/product.entity";


@Injectable()
export class OrderRepository {
    constructor (
        @InjectRepository(Order)
        private readonly orderRepository : Repository <Order>,
        @InjectRepository(User)
        private readonly userRepository : Repository <User>,
        @InjectRepository(OrderDetails)
        private readonly orderDetailsRepository : Repository <OrderDetails>,
        @InjectRepository(Product)
        private readonly productsRepository : Repository <Product>
    ){}

    async getOrderById(id:string){
       const findedOrder = await this.orderRepository.find({
                where: {id:id},
                relations:{orderDetails:{products:true}, user:true},
        });   
        if(!findedOrder) return new NotFoundException(`No se encontró la orden con id: ${id}`)
        
        return findedOrder
      }
    
      async addOrder(order: CreateOrderDto) {
        const { userId } = order;
        const id = userId;
        const buyerUser = await this.userRepository.findOne({ 
          where: {id} ,
          relations: ['orders']
        });
        if(!buyerUser){
          throw new NotFoundException('Usuarix no encontradx') 
        }
        const newOrder = this.orderRepository.create(new Order());
        newOrder.user = buyerUser;
        newOrder.date = new Date();
        const productDetails = new OrderDetails(); 
        productDetails.products = []

        const idsArray = [];
        for (const product of order.products) {
          idsArray.push(product.id);
        }
        let price = 0
        const products = await Promise.all(
          idsArray.map(async (id) => {
              const product = await this.productsRepository.findOne({
                  where: { id: id },
                  relations: { category: true }
              });
              if(product){
                product.stock -= 1;
                await this.productsRepository.save(product);
                price += Number(product.price);
              }
              return product;
            })
        );
  

        productDetails.products.push(...products);
        productDetails.price = price;
        productDetails.order = newOrder
        
        const savedOrder = await this.orderRepository.save(newOrder);
        const savedOrderDetails = await this.orderDetailsRepository.save(productDetails)
        
        buyerUser.orders.push(savedOrder);
        await this.userRepository.save(buyerUser)
        
        const printSavedOrder = await this.orderRepository.find({
          where: {id: savedOrder.id},
          relations:{orderDetails:true},
        })
        if(!printSavedOrder) return new NotFoundException(`No se encontró la orden con id: ${id}`)

        return {printSavedOrder, userId}

      }
      
}