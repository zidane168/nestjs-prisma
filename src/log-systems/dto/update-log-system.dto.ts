import { PartialType } from '@nestjs/swagger';
import { CreateLogSystemDto } from './create-log-system.dto';

export class UpdateLogSystemDto extends PartialType(CreateLogSystemDto) {}
