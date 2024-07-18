import { Injectable, NotFoundException } from '@nestjs/common';
import { FileUploadRepository } from './file-upload.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/Products/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FileUploadService {
    constructor(
        private readonly fileUploadRepository: FileUploadRepository,
        @InjectRepository(Product) 
        private readonly productRepository: Repository<Product>,
    ){}

    async uploadImage(file:Express.Multer.File, productId:string){
       
        const productImageUpload = await this.productRepository.findOneBy({id: productId})
        if(!productImageUpload) {
            throw new NotFoundException('Producto no encontrado')
        } 
        const response = await this.fileUploadRepository.uploadImage(file)
        if(!response.secure_url){
            throw new NotFoundException('No se pudo cargar la imagen')
        }
        await this.productRepository.update(productId, {
            imgUrl: response.secure_url
        })

        const updatedProduct = await this.productRepository.findOneBy({id: productId})
        if(!updatedProduct) {
            throw new NotFoundException('No se pudo actualizar la imagen en el producto')
        }
        return updatedProduct
    }
}
