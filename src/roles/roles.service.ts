import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class RolesService {

  constructor(private readonly databaseService: DatabaseService) {

  }

  create(createRoleDto: CreateRoleDto) {
    this.databaseService.role.create({
      data: {
        data: createRoleDto,
      }
    })
  }

  findAll() {
    return `This action returns all roles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} role`;
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }

  async getPaginated(page: number, pageSize: number) { 
    const skip = (page - 1) * pageSize; 
    const take = pageSize; 
    const roles = await this.databaseService.role.findMany({ 
      skip, 
      take, 
      orderBy:  { 
        created: 'desc',      // You can adjust this to your desired sorting criteria 
      }, 
    }); 
    const totalPosts = await this.databaseService.role.count(); 
    return { 
      roles, 
      totalPages: Math.ceil(totalPosts / pageSize), 
      currentPage: page, 
    };
  }

  async getPermissionByRoleId(id: number) {
    const permissions = this.databaseService.role.findUnique({
      where: {
        id
      },
      include: {
        permissions: {
          select: { 
            permission: true
          }
        },
        administrators : true,
      }
    })

    return permissions;
  }
}
