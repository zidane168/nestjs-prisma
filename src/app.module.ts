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
import { AdministratorTokensModule } from './administrator-tokens/administrator-tokens.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { UserInterceptor } from './interceptors/user.interceptor';

@Module({ 
  imports: [ 
    DatabaseModule, AuthModule, SettingsModule,  AdministratorsModule, RolesModule, LogSystemsModule, AdministratorTokensModule],
  controllers: [AppController],
  providers: [AppService, LogSystemsService, 
    {
      provide: APP_INTERCEPTOR,
      useClass: UserInterceptor,
    }
  ],
})

export class AppModule { 
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL })  // apply to all
  }

}
