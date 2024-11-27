import { ApiResponseProperty } from "@nestjs/swagger";
import { IsDate, IsNumber, IsString } from "class-validator";

export class CreateAdministratorTokenDto {
 
    @ApiResponseProperty()  
    token: string 

    @ApiResponseProperty() 
    exp: Date

    @ApiResponseProperty() 
    administratorId: number
    
}
