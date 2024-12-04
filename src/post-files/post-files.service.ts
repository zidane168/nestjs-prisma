import { Injectable } from '@nestjs/common';
import { CreatePostFileDto } from './dto/create-post-file.dto';
import { UpdatePostFileDto } from './dto/update-post-file.dto';
import { DatabaseService } from 'src/database/database.service';
import { existsSync, mkdirSync, writeFile } from 'fs'; 
import * as path from 'path' 
import { join } from 'path'

@Injectable()
export class PostFilesService {

  constructor(private readonly databaseService: DatabaseService) {}
  
  async upload( file: Express.Multer.File, domain: string ) {    
    const postFileDto = new CreatePostFileDto(null, '');
    postFileDto.name = file.originalname;
    postFileDto.path = file.path;   
    postFileDto.ext = file.mimetype 
    // postFileDto.postId = null

    const result = await this.databaseService.postFile.create({ 
      data: postFileDto
      // data: { 
      //   // name: postFileDto.name, 
      //   // path: postFileDto.path, 
      //   // ext: postFileDto.ext, 
      //   // postId: null, 
      //  //  post: { connect: { id: null } } 
      //   // Use connect to set the post relationship 
      // }
    }) 

    return result;
  }

  // async getInfo(id: number, domain: string): Promise<CreatePostFileDto> {

  //     const item = await this.databaseService.postFile.findUnique({
  //       where: {
  //         id 
  //       }
  //     }) 
    
  //     // if (!item) {
  //     //   throw new NotFoundException(ResponseMessageEnum.EVENT_EXPENSE_FILE_NOT_FOUND);
  //     // }   
  //     // return new EventExpenseFile(item, domain);
  // }  

  // async deleteInfo(id: number) {
  //     const item = await this.eventExpenseFileRepository.findOne({
  //         where: {
  //             id: id
  //         }
  //     })
  //     if (!item) {
  //         throw new NotFoundException(ResponseMessageEnum.EVENT_EXPENSE_FILE_NOT_FOUND);
  //     }
  //     await this.eventExpenseFileRepository.remove(item); 

  //     // delete physical file on server
  //     const path = item.path
  //     unlink (path, (err) => {
  //         if (err) {
  //             log(`Error delete file: ${err}`)
  //         } else {
  //             log (`File deleted: ${path}`)
  //         }
  //     })
  // }
}
