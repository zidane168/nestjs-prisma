import { Module } from '@nestjs/common';
import { AdministratorsService } from './administrators.service';
import { AdministratorsController } from './administrators.controller';
import { DatabaseModule } from 'src/database/database.module';
import { RolesService } from 'src/roles/roles.service';

@Module({

  imports: [
    DatabaseModule,
  ],
  controllers: [AdministratorsController],
  providers: [AdministratorsService, RolesService],
})
export class AdministratorsModule {}
