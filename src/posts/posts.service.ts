import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { DatabaseService } from 'src/database/database.service';
import { ExtendedRequest } from 'src/types/express';

@Injectable()
export class PostsService { 

  constructor(private readonly databaseService: DatabaseService) {   }

  async add(
    ids: string[],
  ) {

    // add one line to post
    const post = await this.databaseService.post.create({
      data: {
        enabled: true, 
      }
    });

    // and update postId with post.id with update Many ids above to postFIle
    await this.databaseService.postFile.updateMany({
      where: {
        id: {
          in: ids.map((id) => parseInt(id))
        }
      },

      data: {
        postId: post.id
      }
    })

    // await this.databaseService.role.create({
    //   data: {
    //     ...createRoleDto,
    //     createdBy: request.user.id,
    //   }
    // })
  }

  async create(
    createPostDto: CreatePostDto, 
    request: Request) {
    const { postLanguages, postFiles, ...postData } = createPostDto; 
    // const createdPost = await this.databaseService.post.create( { 
    //     data: { 
    //       ...postData, 
    //       createdBy: request.user.id, 
    //       postLanguages: { 
    //         create: postLanguages, 
    //       }, 
    //       postFiles: { 
    //         create: postFiles, 
    //       }, 
    //   }, 
    //   include: { 
    //     postLanguages: true, 
    //     postFiles: true, 
    //   }, 
    // }); 
    
    // return createdPost
  }

  findAll() {
    return `This action returns all posts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
