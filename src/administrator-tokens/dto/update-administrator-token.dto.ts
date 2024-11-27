import { PartialType } from '@nestjs/swagger';
import { CreateAdministratorTokenDto } from './create-administrator-token.dto';

export class UpdateAdministratorTokenDto extends PartialType(CreateAdministratorTokenDto) {}
