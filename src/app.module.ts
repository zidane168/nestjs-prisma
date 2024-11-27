import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module'; 
import { AuthModule } from './auth/auth.module';
import { SettingsModule } from './settings/settings.module';  
import { AdministratorsModule } from './administrators/administrators.module';
import { RolesModule } from './roles/roles.module'; 
import { LogSystemsModule } from './log-systems/log-systems.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { LogSystemsService } from './log-systems/log-systems.service';

@Module({ 
  imports: [ 
    DatabaseModule, AuthModule, SettingsModule,  AdministratorsModule, RolesModule, LogSystemsModule],
  controllers: [AppController],
  providers: [AppService, LogSystemsService],
})

export class AppModule { 
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL })  // apply to all
  }

}
