import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class RolesService {

  constructor(private readonly databaseService: DatabaseService) {

  }

  async create(createRoleDto: Prisma.RoleCreateInput) {
    await this.databaseService.role.create({
      data: createRoleDto
    })
  }

  async findAll() {
    return await this.databaseService.role.findMany()
  }

  async findOne(id: number) {
    return await this.databaseService.role.findUnique({
      where: {
        id
      }
    })
  }

  async update(id: number, updateRoleDto: Prisma.RoleUpdateInput) {
    return await this.databaseService.role.update({
      where: {
        id
      },
      data: updateRoleDto
    })
  }

  async remove(id: number) {
    return await this.databaseService.role.delete({
      where: {
        id
      }
    })
  }

  async getPaginated(page: number, pageSize: number) { 
    const skip = Number((page - 1) * pageSize); 
    const take = Number(pageSize) 
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
      total: totalPosts,
      currentPage: Number(page), 
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
