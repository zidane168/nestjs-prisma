import { Module } from '@nestjs/common';
import { SettingsService } from './settings.service';
import { SettingsController } from './settings.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [
    DatabaseModule    // trong setting service có su dung DatabaseModule thì phải import nó vào như sau
  ],
  controllers: [SettingsController],
  providers: [SettingsService],
})
export class SettingsModule {}
