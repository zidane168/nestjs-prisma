import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { INestApplication } from "@nestjs/common"

export const config = new DocumentBuilder()
    .setTitle('NestJS with Prisma')
    .setDescription('a Full tutorial with Prisma')
    .setVersion('1.0')
    .addTag("CMS")
    // .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'accessToken') 
    .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'accessToken') 
    .build();

export function setupSwaggerCMS(app: INestApplication) {
    const document = SwaggerModule.createDocument(app, config, 
        // {
        //     include: [UserController]    //
        // }
    );
    SwaggerModule.setup('cms', app, document); 
}



