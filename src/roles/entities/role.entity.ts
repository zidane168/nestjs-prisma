import { ApiProperty } from "@nestjs/swagger";

export class Role {
    @ApiProperty()
    id: number;
    
    @ApiProperty()
    slug: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    created: Date;

    @ApiProperty()
    updated: Date;

    @ApiProperty()
    createdBy: number;

    @ApiProperty()
    updatedBy: number;
}


