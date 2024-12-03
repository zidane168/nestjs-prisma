import { Module } from '@nestjs/common';
import { PostFilesService } from './post-files.service';
import { PostFilesController } from './post-files.controller';
import { DatabaseModule } from 'src/database/database.module';
import { MulterModule } from '@nestjs/platform-express'
import { diskStorage, memoryStorage } from 'multer'

@Module({
  // imports: [
  //   DatabaseModule,
  //   MulterModule.register({ 
  //     storage:  memoryStorage()
  //     // diskStorage({ 
  //     //   destination: './uploads', 
  //     //   filename: (req, file, cb) => { 
  //     //     const filename = `${Date.now()}-${file.originalname}`; 
  //     //     cb(null, filename); 
  //     //   },
  //     // })
  //   })  
  // ],

  imports: [ 
    DatabaseModule,
    MulterModule.register({ 
      storage: diskStorage({ 
        destination: './uploads', 
        filename: (req, file, cb) => { 
          const uniqueSuffix = `${Date.now()}-${file.originalname}`; 
          cb(null, uniqueSuffix); 
        }, 
      }), 
    }), 
  ],
  controllers: [PostFilesController],
  providers: [PostFilesService],
})
export class PostFilesModule {}
