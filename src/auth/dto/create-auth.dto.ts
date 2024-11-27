import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateAuthDto {
    @ApiProperty({
        description: 'Password for the user',
        example: 'admin@gmail.com',
        default: 'admin@gmail.com'
    })
    @IsString() 
    email: string;

    @ApiProperty({
        description: 'Password for the user',
        example: '123456',
        default: '123456'
    })
    @IsString()
    password: string;
}
