import { Injectable } from '@nestjs/common';
import { CreatePostFileDto } from './dto/create-post-file.dto';
import { UpdatePostFileDto } from './dto/update-post-file.dto';

@Injectable()
export class PostFilesService {
  create(createPostFileDto: CreatePostFileDto) {
    return 'This action adds a new postFile';
  }

  findAll() {
    return `This action returns all postFiles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} postFile`;
  }

  update(id: number, updatePostFileDto: UpdatePostFileDto) {
    return `This action updates a #${id} postFile`;
  }

  remove(id: number) {
    return `This action removes a #${id} postFile`;
  }
}
