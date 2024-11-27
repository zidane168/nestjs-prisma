import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LogSystemsService } from './log-systems.service';
import { CreateLogSystemDto } from './dto/create-log-system.dto';
import { UpdateLogSystemDto } from './dto/update-log-system.dto';

@Controller('log-systems')
export class LogSystemsController {
  constructor(private readonly logSystemsService: LogSystemsService) {}

  @Post()
  createLog(@Body() createLogSystemDto: CreateLogSystemDto) {
    return this.logSystemsService.createLog(createLogSystemDto);
  }

  @Get()
  findAll() {
    return this.logSystemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.logSystemsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLogSystemDto: UpdateLogSystemDto) {
    return this.logSystemsService.update(+id, updateLogSystemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.logSystemsService.remove(+id);
  }
}
