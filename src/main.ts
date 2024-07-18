import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerMidleware } from './middlewares/logger.middleware';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
  .setTitle('NestJS API')
  .setDescription('Módulo integrador M4-Back - Evaristo Aguirre')
  .setVersion('1.0.0')
  .addBearerAuth()
  .build()

  const document = SwaggerModule.createDocument(app, options)

  SwaggerModule.setup('api', app, document);

  app.use(LoggerMidleware);
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true
  }));
  await app.listen(3000);
  console.log('Server listening on http://localhost:3000');
}
bootstrap();
