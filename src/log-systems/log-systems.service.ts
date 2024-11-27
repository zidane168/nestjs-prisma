import { Injectable } from '@nestjs/common';
import { CreateLogSystemDto } from './dto/create-log-system.dto';
import { UpdateLogSystemDto } from './dto/update-log-system.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class LogSystemsService {
  constructor(private readonly databaseService: DatabaseService){}

  async createLog(createLogDto: CreateLogSystemDto) {
    return this.databaseService.logSystem.create({
      data: createLogDto
    })
  }

  findAll() {
    return `This action returns all logSystems`;
  }

  findOne(id: number) {
    return `This action returns a #${id} logSystem`;
  }

  update(id: number, updateLogSystemDto: UpdateLogSystemDto) {
    return `This action updates a #${id} logSystem`;
  }

  remove(id: number) {
    return `This action removes a #${id} logSystem`;
  }
}
