import { ArrayMinSize, IsArray, IsNotEmpty, IsUUID} from 'class-validator';
import { Product } from 'src/Products/product.entity';


export class CreateOrderDto {

    /**
     * Debe ser un string formato uuid v4 generado por base de datos
     */
    @IsNotEmpty()
    @IsUUID()
    userId: string;
    
    /**
     * Debe ser un arreglo de productos con sus respectivos uuid's
     */
    @ArrayMinSize(1)
    @IsArray()
    products: Partial <Product []>;
}