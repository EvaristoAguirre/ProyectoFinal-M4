import { Body, Controller, Get, Param, ParseUUIDPipe, Post, UseGuards } from "@nestjs/common";
import { OrderService } from "./order.service";
import { CreateOrderDto } from "./createOrder.dto";
import { ApiTags } from "@nestjs/swagger";
import { AuthGuard } from "src/Auth/Guards/auth.guard";

@ApiTags('Orders')
@Controller('orders')
export class OrdersController {
    constructor(
        private readonly orderService: OrderService
    ){}

    @Get(':id')
    @UseGuards(AuthGuard)
    getOrderById(@Param('id', ParseUUIDPipe) id:string){
        return this.orderService.getOrderById(id);
    }

    @Post()
    @UseGuards(AuthGuard)
    addOrder(@Body() order:CreateOrderDto){
        return this.orderService.addOrder(order);
    }
}