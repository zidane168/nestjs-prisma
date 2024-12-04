import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNumber, IsOptional, IsString } from "class-validator";

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
    created?: Date
 
    constructor(document: CreatePostFileDto, domain: string) {    
        const { path, name } = document || {};
        Object.assign(this, {    path, name });  
        this.path = path ? domain + "/" + path : ''
        this.name = name ?? ''   
      } 
}
