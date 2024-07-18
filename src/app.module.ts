import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { usersModule } from './Users/users.module';
import { productsModule } from './Products/products.module';
import { AuthModule } from './Auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { typeOrmConfig } from './config/typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderModule } from './Orders/order.module';
import { CategoriesModule } from './Categories/categories.module';
import { OrderDetails } from './Orders/orderDetails.entity';
import { FileUploadModule } from './file-upload/file-upload.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeOrmConfig],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => configService.get('typeorm'),
    }),
    usersModule, 
    productsModule, 
    AuthModule,
    OrderModule,
    CategoriesModule,
    FileUploadModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
