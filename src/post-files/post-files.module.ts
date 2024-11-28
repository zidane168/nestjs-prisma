import { Module } from '@nestjs/common';
import { PostFilesService } from './post-files.service';
import { PostFilesController } from './post-files.controller';

@Module({
  controllers: [PostFilesController],
  providers: [PostFilesService],
})
export class PostFilesModule {}
