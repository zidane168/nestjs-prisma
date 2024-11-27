import { Controller, Injectable } from '@nestjs/common';
import { CreateAdministratorDto } from './dto/create-administrator.dto';
import { UpdateAdministratorDto } from './dto/update-administrator.dto';
import { DatabaseService } from 'src/database/database.service'; 
import { RolesService } from 'src/roles/roles.service';

@Injectable()
export class AdministratorsService {

  constructor(
    private readonly roleService: RolesService,
    private readonly databaseService: DatabaseService
  ) {}

  create(createAdministratorDto: CreateAdministratorDto) {
    return 'This action adds a new administrator';
  }

  findAll() {
    return `This action returns all administrators`;
  }

  findOne(id: number) {
    return `This action returns a #${id} administrator`;
  }

  update(id: number, updateAdministratorDto: UpdateAdministratorDto) {
    return `This action updates a #${id} administrator`;
  }

  remove(id: number) {
    return `This action removes a #${id} administrator`;
  }

  async getPermissionByAdminId(id: number) {  
    const listPermissions = await this.databaseService.administrator.findUnique({
      where: {
        id
      },
      include: {
        roles: {          // 1x administrator have nx roles
          
        }
      }, 
    });
    // console.log(' ================ 0 0 00 0 00  = =================')
    // console.log(listPermissions.roles)  

    let result = [];
    for(let i=0; i < listPermissions.roles.length; i++) {
      const rolePermissions = await this.roleService.getPermissionByRoleId(listPermissions.roles[i].roleId); 
      // console.log(' ================ 0 0 00 0 00  = =================')
      // console.log ( JSON.stringify(rolePermissions, null, 2) ) 
      // console.log(' ================ 0 0 00 0 00  = =================')

      const detailPermissions = rolePermissions.permissions.map(item => ({
        controller: item.permission.controller,
        action: item.permission.action
      }))
      result = [...result, ...detailPermissions];
    } 

    // console.log(JSON.stringify(result, null, 2)) 
    return result; 
  }
}
