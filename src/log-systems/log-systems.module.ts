import { Module } from '@nestjs/common';
import { LogSystemsService } from './log-systems.service';
import { LogSystemsController } from './log-systems.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [ 
    DatabaseModule
  ],
  controllers: [LogSystemsController],
  providers: [LogSystemsService],
})
export class LogSystemsModule {}
