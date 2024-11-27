import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { INestApplication } from "@nestjs/common"
import { SettingsController } from "./settings/settings.controller";

export const config = new DocumentBuilder()
    .setTitle('NestJS with Prisma')
    .setDescription('a Full tutorial with Prisma')
    .setVersion('1.0')
    .addTag("Setting")
    .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'accessToken') 
    .build();

export function setupSwaggerAPI(app: INestApplication) {
    const document = SwaggerModule.createDocument(app, config, 
        // {
        //     include: [SettingsController]    //
        // }
    );
    SwaggerModule.setup('api', app, document); 
}



