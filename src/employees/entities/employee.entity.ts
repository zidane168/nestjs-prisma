import { ApiProperty } from "@nestjs/swagger";
import { Role } from "@prisma/client";

export class Employee {
    
    // id Int @id @default(autoincrement())
    // name String
    // email String @unique
    // enabled Boolean @default(true)
    // role Role 
    // createAt DateTime @default(now())
    // updateAt DateTime @updatedAt
    
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty({ required: true })
    email: string 

    @ApiProperty() 
    enabled: boolean;

    @ApiProperty() 
    role: Role

    @ApiProperty() 
    createAt: Date

    @ApiProperty() 
    updateAt: Date
}
