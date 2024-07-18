import { Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put, Query, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.entity';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/Auth/Guards/auth.guard';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getProducts(@Query('page') page:number, @Query('limit') limit:number) {
    return this.productsService.getProducts(page, limit);
  }

  @Get('seeder')
  addProduct(){
    return this.productsService.addProducts();
  }

  @Get(':id')
  getProductById(@Param('id', ParseUUIDPipe) id:string) {
    return this.productsService.getProductById(id);
  }

  @Post('update')
  @UseGuards(AuthGuard)
  createProduct(product:Product){
    return this.productsService.createProduct(product);
  }

  @Put(':id')
  @UseGuards(AuthGuard)
  updateProduct(@Param('id', ParseUUIDPipe) id:string, product: Partial <Product> ){
    return this.productsService.updateProduct(product, id);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  deleteProduct(@Param('id', ParseUUIDPipe) id:string){
    return this.productsService.deleteProduct(id);
  }

}


