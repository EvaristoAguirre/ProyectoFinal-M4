import { MaxLength, MinLength } from "class-validator";
import { Order } from "src/Orders/order.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  name: 'user',
})
export class User {
  /**
     * Debe ser un string formato uuid v4 generado por base de datos
     */
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /**
     * Debe ser un string de hasta 80 caracteres
     * @example 'Usuarix ejemplo'
     */
  @Column({
    type: 'varchar',
    length: 80,
  })
  name: string;

  /**
     * Debe ser un string en formato email
     * @example 'example@example.com'
     */
  @Column({
    unique: true,
    length: 50,
  })
  email: string;

  /**
     * Debe ser un número
     * @example '112345678'
     */
  @Column({
    type: 'int'
  })
  phone: number;

  /**
     * Debe ser un string de entre 4 y 20 caracteres
     * @example 'País de ejemplo'
     */
  @Column({
    length: 20,
  })
  country: string;

  /**
     * Debe ser un string de entre 3 y 80 caracteres
     * @example 'Calle falsa 1234'
     */
  @Column()
  address: string;

  /**
     * Debe ser una cadena de entre 4 y 10 caracteres que contenga al menos una minúscula, una mayúscula, un número y un caracter especial (!@#$%^&*)
     * @example 'aAa1234@'
     */
  @Column()
  @MaxLength(128)
  password: string;

  /**
     * Debe ser un string de entre 4 y 20 caracteres
     * @example 'Ciudad de ejemplo'
     */
  @Column({
    length: 20,
  })
  city: string;

  @OneToMany(()=>Order, (order)=>order.user)
  @JoinColumn({name:'orders_id'})
  orders: Order[];
}