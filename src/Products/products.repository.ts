import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "./product.entity";
import { Repository } from "typeorm";
import * as data from '../utils/seeds.json'
import { Category } from "src/Categories/categories.entity";

@Injectable()
export class ProductsRepository{
    constructor(
        @InjectRepository(Product)
        private readonly productsRepository: Repository <Product>,
        @InjectRepository(Category)
        private readonly categoriesRepository: Repository <Category>
    ){}

    async getProducts(page:number, limit: number):Promise <Product[]> {     
        let products = await this.productsRepository.find({relations:{category:true}})
        !page ? (page = 1) : page;
        !limit ? (limit = 5) : limit;
        const start = (page - 1) * limit;
        const end = start + limit;
        products = products.slice(start, end);
        return products
    }

    async getProductById(id:string) {
        const productById = await this.productsRepository.findOneBy({id});
        if(!productById) return new NotFoundException(`No se encontró el producto con id: ${id}`)
        return productById
    }


    async addProducts(){

        const categories = await this.categoriesRepository.find();

        data?.map( async (element)=>{
            const categori = categories.find((category)=>category.name === element.category);

            const product = new Product();
                product.name = element.name,
                product.description = element.description,
                product.price = element.price,
                product.stock = element.stock,
                product.imgUrl = element.imgUrl,
                product.category = categori,

            await this.productsRepository
            .createQueryBuilder()
            .insert()
            .into(Product)
            .values(product)
            .orUpdate(
                ['description', 'price', 'stock', 'imgUrl'] , ['name']
            )
            .execute();
        });
        return 'Productos creados'
    }

    async createProduct(product: Product): Promise<string>{
        const createdProduct = await this.productsRepository.save(product);
        return createdProduct.id;
    }

    async updateProduct(product: Partial <Product> , id:string){
        await this.productsRepository
        .createQueryBuilder()
        .where('id = :id', {id:id})
        .insert()
        .into(Product)
        .values(product)
        // .orUpdate(['description', 'price', 'stock', 'imgUrl'] , ['name'])
        .execute();
    }

    async deleteProduct(id:string){
        const deletedProduct = await this.productsRepository.delete(id)
        if(!deletedProduct) return new NotFoundException(`No se encontró el producto con id: ${id}`)
        return id;
    }
}