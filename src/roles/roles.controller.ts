import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards, SetMetadata, Req } from '@nestjs/common';
import { RolesService } from './roles.service';
import { Prisma } from '@prisma/client';
import { ApiBearerAuth, ApiCreatedResponse } from '@nestjs/swagger';
import { Role } from './entities/role.entity';
import { RolePaginate } from './entities/rolePaginate';
import { CreateRoleDto } from './dto/create-role.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { PermissionGuard } from 'src/auth/guards/permission.guard';
import { ACTION, PERMISSION } from 'src/lib/enum'; 
import { ExtendedRequest } from 'src/types/express';
import { UpdateRoleDto } from './dto/update-role.dto';
 
@ApiBearerAuth('accessToken')
@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @UseGuards(JwtAuthGuard, PermissionGuard)    // just use this line for need a bearer token 
  @SetMetadata('permissions', { "controller": PERMISSION.ROLE, "action": ACTION.ADD } )
  @Post()
  @ApiCreatedResponse({ type: Role }) 
  create(@Body() createRoleDto: CreateRoleDto, @Req() req: ExtendedRequest) {
    return this.rolesService.create(createRoleDto, req);
  }

  @UseGuards(JwtAuthGuard, PermissionGuard)    // just use this line for need a bearer token 
  @SetMetadata('permissions', { "controller": PERMISSION.ROLE, "action": ACTION.ADD } )
  @Get('paginated')
  @ApiCreatedResponse({ type: RolePaginate })
  getPaginated(
    @Query('page') page: number,
    @Query('pageSize') pageSize: number,
  ) {
    return this.rolesService.getPaginated(page, pageSize);
  }

  @UseGuards(JwtAuthGuard, PermissionGuard)    // just use this line for need a bearer token 
  @SetMetadata('permissions', { "controller": PERMISSION.ROLE, "action": ACTION.VIEW } )
  @Get() 
  findAll() {
    return this.rolesService.findAll();
  }

  @UseGuards(JwtAuthGuard, PermissionGuard)    // just use this line for need a bearer token 
  @SetMetadata('permissions', { "controller": PERMISSION.ROLE, "action": ACTION.VIEW } )
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rolesService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard, PermissionGuard)    // just use this line for need a bearer token 
  @SetMetadata('permissions', { "controller": PERMISSION.ROLE, "action": ACTION.EDIT } )
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto, @Req() req: ExtendedRequest) {
    return this.rolesService.update(+id, updateRoleDto, req);
  }

  @UseGuards(JwtAuthGuard, PermissionGuard)    // just use this line for need a bearer token 
  @SetMetadata('permissions', { "controller": PERMISSION.ROLE, "action": ACTION.DELETE } )
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolesService.remove(+id);
  }
}
