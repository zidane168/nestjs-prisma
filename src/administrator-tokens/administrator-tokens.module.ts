import { Module } from '@nestjs/common';
import { AdministratorTokensService } from './administrator-tokens.service';
import { AdministratorTokensController } from './administrator-tokens.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [
    DatabaseModule
  ],
  controllers: [AdministratorTokensController],
  providers: [AdministratorTokensService],
})
export class AdministratorTokensModule {}
