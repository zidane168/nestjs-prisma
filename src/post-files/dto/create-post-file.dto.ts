import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreatePostFileDto {

    @ApiProperty()
    @IsString()
    ext: string 
    
    @ApiProperty()
    @IsString() 
    name: string 

    @ApiProperty()
    @IsString() 
    path: string 

    @ApiProperty()
    @IsNumber() 
    postId: number 
}
