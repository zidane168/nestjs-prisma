import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module'; 
import { AuthModule } from './auth/auth.module';
import { SettingsModule } from './settings/settings.module';  
import { AdministratorsModule } from './administrators/administrators.module';
import { RolesModule } from './roles/roles.module';

@Module({
  imports: [ 
    DatabaseModule, AuthModule, SettingsModule,  AdministratorsModule, RolesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
