import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { setupSwaggerCMS } from './swagger.config.cms';
import { setupSwaggerAPI } from './swagger.config.api';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors();

  setupSwaggerCMS(app)
  setupSwaggerAPI(app)
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
