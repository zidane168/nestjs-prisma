import { ApiProperty } from "@nestjs/swagger"; 
import { IsString } from 'class-validator'

export class CreateRoleDto {

    @ApiProperty({ description: 'The name of the role' }) 
    @IsString() 
    name: string; 
    
    @ApiProperty({ description: 'The slug for the role' }) 
    @IsString() 
    slug: string
}
