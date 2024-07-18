import { Category } from "src/Categories/categories.entity";
import { OrderDetails } from "src/Orders/orderDetails.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'products'})

export class Product {
    /**
     * Debe ser un string formato uuid v4 generado por base de datos
     */
    @PrimaryGeneratedColumn('uuid')
    id:string

    /**
     * Debe ser un string de hasta 50 caracteres
     * @example 'Producto ejemplo'
     */
    @Column({
        length:50,
        unique: true,
    })
    name: string;

    /**
     * Debe ser un string
     * @example 'Descripción de ejemplo - Modelo APA 2024'
     */
    @Column({
        default: 'Sin descripción'
    })
    description:string;

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

    /**
     * Debe ser un número entero
     * @example '10'
     */
    @Column({
        type: 'smallint',
        unsigned: true,
        nullable: false,
    })
    stock: number;
    
    /**
     * Debe ser un string con formato de dirección htpp
     * @example 'http://paginadeejemplo.com/imagen'
     */
    @Column({
        type: 'text',
        default: 'Sin imagen',
    })
    imgUrl:string;

    @ManyToOne(() => Category, (category) => category.products)
    @JoinColumn({ name: 'category_id' })
    category: Category;

    @ManyToMany(() => OrderDetails, (orderDetails) => orderDetails.products)
    @JoinTable({
    name: 'orderDetails_Products',
    joinColumn: { name: 'product_id' },
    inverseJoinColumn: { name: 'order_detail_id' },
    })
    ordersDetails: OrderDetails[];
}


