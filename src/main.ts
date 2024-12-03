import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module'; 
import { setupSwaggerCMS } from './swagger.config.cms';
import { setupSwaggerAPI } from './swagger.config.api'; 
import { join } from 'path'; 

async function bootstrap() {
  const app = await NestFactory.create(AppModule);  

  app.enableCors();

  setupSwaggerCMS(app)
  setupSwaggerAPI(app)
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
