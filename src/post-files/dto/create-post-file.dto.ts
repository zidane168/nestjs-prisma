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
 
    constructor(document: CreatePostFileDto, domain: string) {    
        const { postId,  path, name } = document || {};
        Object.assign(this, {   postId,  path, name }); 
        this.postId = postId ?? null
        this.path = path ? domain + "/" + path : ''
        this.name = name ?? ''   
      } 
}
