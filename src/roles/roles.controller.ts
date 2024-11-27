import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { RolesService } from './roles.service';
import { Prisma } from '@prisma/client';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { Role } from './entities/role.entity';
import { RolePaginate } from './entities/rolePaginate';
import { CreateRoleDto } from './dto/create-role.dto';
@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  @ApiCreatedResponse({ type: Role })
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.rolesService.create(createRoleDto);
  }

  @Get('paginated')
  @ApiCreatedResponse({ type: RolePaginate })
  getPaginated(
    @Query('page') page: number,
    @Query('pageSize') pageSize: number,
  ) {
    return this.rolesService.getPaginated(page, pageSize);
  }

  @Get() 
  findAll() {
    return this.rolesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rolesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoleDto: Prisma.RoleUpdateInput) {
    return this.rolesService.update(+id, updateRoleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolesService.remove(+id);
  }
}
