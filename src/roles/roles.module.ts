import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { DatabaseService } from 'src/database/database.service';
import { DatabaseModule } from 'src/database/database.module';
import { AdministratorsService } from 'src/administrators/administrators.service';

@Module({
  imports: [
    DatabaseModule
  ],
  controllers: [RolesController],
  providers: [RolesService, AdministratorsService],
})
export class RolesModule {}
