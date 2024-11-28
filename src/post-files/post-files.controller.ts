import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostFilesService } from './post-files.service';
import { CreatePostFileDto } from './dto/create-post-file.dto';
import { UpdatePostFileDto } from './dto/update-post-file.dto';

@Controller('post-files')
export class PostFilesController {
  constructor(private readonly postFilesService: PostFilesService) {}

  @Post()
  create(@Body() createPostFileDto: CreatePostFileDto) {
    return this.postFilesService.create(createPostFileDto);
  }

  @Get()
  findAll() {
    return this.postFilesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postFilesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostFileDto: UpdatePostFileDto) {
    return this.postFilesService.update(+id, updatePostFileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postFilesService.remove(+id);
  }
}
