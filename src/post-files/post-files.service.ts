import { Injectable } from '@nestjs/common';
import { CreatePostFileDto } from './dto/create-post-file.dto';
import { UpdatePostFileDto } from './dto/update-post-file.dto';
import { DatabaseService } from 'src/database/database.service';
import { existsSync, mkdirSync, writeFile } from 'fs'; 
import * as path from 'path' 
import { join } from 'path'
import moment from 'moment';
import { config } from 'process';

require('dotenv').config

@Injectable()
export class PostFilesService {

  constructor(private readonly databaseService: DatabaseService) {}
  
  async upload( file: Express.Multer.File, domain: string ) {    
 
    const postFileDto = new CreatePostFileDto(null, '');
    postFileDto.name = file.originalname;
    postFileDto.path = file.path;   
    postFileDto.ext = file.mimetype  
    
    const result = await this.databaseService.postFile.create({ 
      data: postFileDto 
    }) 

    let temp = process.env.URL + "\\" + result.path
    result.path = temp.replace(/\\/g, "/");

    console.log( result.path ); // Output: abc/abc.png
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
