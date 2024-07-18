import { Product } from "src/Products/product.entity";
import { Column, Entity, JoinColumn, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'categories'})
export class Category {

    /**
     * Debe ser un string formato uuid v4 generado por base de datos
     */
    @PrimaryGeneratedColumn('uuid')
    id: string;

    /**
     * Debe ser un string de hasta 50 caracteres y de carácter único
     * @example 'Categoría ejemplo'
     */
    @Column({
        length: 50,
        nullable:false,
        unique: true,
    })
    name:string;

    @OneToMany(()=>Product, (product)=>product.category)
    @JoinColumn()
    products:Product[];
}