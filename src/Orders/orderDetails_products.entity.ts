import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { OrderDetails } from "./orderDetails.entity";
import { Product } from "src/Products/product.entity";


@Entity('orderDetails_Products')
export class orderDetails_Products{
    /**
     * Debe ser un string formato uuid v4 generado por base de datos
     */
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @ManyToOne(()=>OrderDetails, (orderDetails)=> orderDetails.order)
    @JoinColumn({name:'orderDetails_id'})
    orderDetails:OrderDetails;

    @ManyToOne(()=>Product, (product)=>product.ordersDetails)
    @JoinColumn({name:'product_id'})
    product:Product;
}