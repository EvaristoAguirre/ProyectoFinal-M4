import { Product } from "src/Products/product.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./order.entity";

@Entity({name:'ordersDetails'})
export class OrderDetails {

    /**
     * Debe ser un string formato uuid v4 generado por base de datos
     */
    @PrimaryGeneratedColumn('uuid')
    id: string;

    /**
     * Debe ser un número de hasta 10 dígitos y 2 decimales
     * @example '100.00'
     */
    @Column({
        type: 'decimal',
        precision: 10,
        scale: 2,
        nullable: false,
    })
    price:number;

    @ManyToMany(() => Product, (product) => product.ordersDetails)
    @JoinTable({
    name: 'orderDetails_Products',
    joinColumn: { name: 'order_detail_id' },
    inverseJoinColumn: { name: 'product_id' },
    })
    products: Product[];

    @ManyToOne(() => Order, (order) => order.orderDetails) 
    @JoinColumn({ name: 'order_id' })
    order: Order;
}