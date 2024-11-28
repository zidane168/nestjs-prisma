// src/posts/dto/create-post.dto.ts
import { IsBoolean, IsString, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class CreatePostLanguageDto {
  @IsString()
  alias: string;

  @IsString()
  name?: string;

  @IsString()
  description?: string;
}

class CreatePostFileDto {
  @IsString()
  ext?: string;

  @IsString()
  name: string;

  @IsString()
  path: string;
}

export class CreatePostDto {
  @IsBoolean()
  enabled: boolean;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreatePostLanguageDto)
  postLanguages: CreatePostLanguageDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreatePostFileDto)
  postFiles: CreatePostFileDto[];
}
