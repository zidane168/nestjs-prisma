import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, Req, UploadedFile } from '@nestjs/common';
import { PostFilesService } from './post-files.service';
import { CreatePostFileDto } from './dto/create-post-file.dto'; 
import { ApiConsumes, ApiOkResponse } from '@nestjs/swagger';
import { diskStorage } from 'multer'; 
import { FileInterceptor } from '@nestjs/platform-express';
import { v4 as uuidv4 } from 'uuid';
import * as path from 'path';
import { UploadFileDTO } from './dto/upload-file-dto';

@Controller('post-files')
export class PostFilesController {
  constructor(private readonly postFilesService: PostFilesService) {} 

  @ApiConsumes('multipart/form-data')
  @Post('/upload') 
  @ApiOkResponse({
    type: CreatePostFileDto,
  })   
  @UseInterceptors(FileInterceptor('file')) 
  async upload(
    @UploadedFile() file: Express.Multer.File, 
    domain: string
  ) { 
    return this.postFilesService.upload(file, domain);
  }

  // @Get(':id')
  // @HttpCode(HttpStatus.OK)
  // @ApiOperation({ summary: 'Get a Event Expense File detail' })
  // @ApiOkResponse({
  //   type: EventExpenseFile,
  // })
  // @CheckPolicy((ability) => ability.can(PermissionAction.VIEW, PermissionController.EVENT))
  // async get(
  //   @Param('id') id: string,
  //   @Req() request: Request
  // ): Promise<EventExpenseFile> {

  //   const idNumber = parseInt(id)
  //   return await this.eventExpenseFileService.getInfo(idNumber, request?.hostname); 
  // } 

  // @Delete('')
  // @HttpCode(HttpStatus.OK)
  // @ApiNoContentResponse()
  // @CheckPolicy((ability) => ability.can(PermissionAction.DELETE, PermissionController.EVENT))
  // async delete(@Body() data: EventExpenseFileDeleteDTO) {
  //   const id = parseInt(data.id)
  //   return await this.eventExpenseFileService.deleteInfo(id);
  // }
}
