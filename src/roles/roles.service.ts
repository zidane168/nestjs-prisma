import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class RolesService {

  constructor(private readonly databaseService: DatabaseService) {

  }

  create(createRoleDto: CreateRoleDto) {
    return 'This action adds a new role';
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
        }
      }
    })

    return permissions;
  }
}
