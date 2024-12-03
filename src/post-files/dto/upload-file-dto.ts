import { ApiProperty } from '@nestjs/swagger';

export class UploadFileDTO {
    @ApiProperty({
        description: 'Upload File',
        type: 'string',
        format: 'binary',
    })
    readonly file: string;
}
