import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateAdministratorTokenDto } from './dto/create-administrator-token.dto';
import { UpdateAdministratorTokenDto } from './dto/update-administrator-token.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class AdministratorTokensService {

  constructor (private readonly databaseService: DatabaseService) { }

  async create(createAdministratorTokenDto: CreateAdministratorTokenDto) {

    try {
      return await this.databaseService.administratorToken.create({
        data: createAdministratorTokenDto,
      })
    } catch (error) {
      console.error( error )
      throw new InternalServerErrorException(error.message)
    } 
  }

  async getAdministratorIdByToken(token: string) {
    const result = await this.databaseService.administratorToken.findUnique({
      where: {
        token, 
        exp: {
          gte: new Date()
        }
      }
    })

    return result.administratorId;
  }

  async findAll() {
    return `This action returns all administratorTokens`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} administratorToken`;
  }

  async update(id: number, updateAdministratorTokenDto: UpdateAdministratorTokenDto) {
    return `This action updates a #${id} administratorToken`;
  }

  async remove(id: number) {
    return `This action removes a #${id} administratorToken`;
  }
}
