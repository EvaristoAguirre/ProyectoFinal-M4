import { Injectable} from '@nestjs/common';
import { ProductsRepository } from './products.repository';
import { Product } from './product.entity';

@Injectable()
export class ProductsService{
  constructor(
    private readonly productsRepository : ProductsRepository
  ){}

  getProducts(page:number, limit: number){
    return this.productsRepository.getProducts(page, limit);
  }
  getProductById(id:string){
    return this.productsRepository.getProductById(id);
  }

  addProducts(){
    return this.productsRepository.addProducts();
  }

  createProduct(product: Product){
    return this.productsRepository.createProduct(product);
  }

  updateProduct(product: Partial <Product> , id:string){
    return this.productsRepository.updateProduct(product, id);
  }

  deleteProduct(id:string){
    return this.productsRepository.deleteProduct(id);
  }
}
