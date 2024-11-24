import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Prisma } from '@prisma/client';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { Employee } from './entities/employee.entity';

@Controller('employees')
@ApiTags('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Post()
  @ApiCreatedResponse({ type: Employee })
  create(@Body() createEmployeeDto: Prisma.EmployeeCreateInput) { // change to Prisma.EmployeeCreateInput
    return this.employeesService.create(createEmployeeDto);
  }

  @Get()
  @ApiOkResponse({ type: Employee, isArray: true })
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return this.employeesService.findAll(role)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeesService.findOne(+id);    // + is a number
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmployeeDto: Prisma.EmployeeUpdateInput) {  // change to Prisma.EmpoyeeeUpdateInput
    return this.employeesService.update(+id, updateEmployeeDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: Employee })
  remove(@Param('id') id: string) {
    return this.employeesService.remove(+id);
  }
}
