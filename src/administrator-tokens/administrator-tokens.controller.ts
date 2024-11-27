import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdministratorTokensService } from './administrator-tokens.service';
import { CreateAdministratorTokenDto } from './dto/create-administrator-token.dto';
import { UpdateAdministratorTokenDto } from './dto/update-administrator-token.dto';

@Controller('administrator-tokens')
export class AdministratorTokensController {
  constructor(private readonly administratorTokensService: AdministratorTokensService) {}

  @Post()
  create(@Body() createAdministratorTokenDto: CreateAdministratorTokenDto) {
    return this.administratorTokensService.create(createAdministratorTokenDto);
  }

  @Get()
  findAll() {
    return this.administratorTokensService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.administratorTokensService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdministratorTokenDto: UpdateAdministratorTokenDto) {
    return this.administratorTokensService.update(+id, updateAdministratorTokenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.administratorTokensService.remove(+id);
  }
}
