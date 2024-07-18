import { User } from "src/Users/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { OrderDetails } from "./orderDetails.entity";

@Entity({name:'orders'})
export class Order {

    /**
     * Debe ser un string formato uuid v4 generado por base de datos
     */
    @PrimaryGeneratedColumn('uuid')
    id: string;

    /**
     * Debe ser una fecha con formato MM/DD/YY
     * @example '11/11/11'
     */
    @Column({
        type: 'timestamptz',
        nullable: false,
    })
    date: Date;

    @ManyToOne(() => User, (user) => user.orders)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @OneToMany(() => OrderDetails, (orderDetails) => orderDetails.order)
    @JoinColumn({ name: 'order_id' })
    orderDetails: OrderDetails[];
}