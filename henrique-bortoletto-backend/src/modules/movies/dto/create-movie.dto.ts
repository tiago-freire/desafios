import {
  IsString,
  IsNumber,
  IsEnum,
  IsArray,
  IsUrl,
  IsOptional,
  IsDateString,
  Min,
} from 'class-validator';

import { Genre, Status } from '@prisma/client';

export class CreateMovieDto {
  @IsString()
  title: string;

  @IsString()
  sinopse: string;

  @IsNumber()
  @Min(0)
  popularity: number;

  @IsNumber()
  @Min(0)
  votes: number;

  @IsDateString()
  release: Date;

  @IsNumber()
  @Min(1)
  duration: number;

  @IsEnum(Status)
  status: Status;

  @IsString()
  language: string;

  @IsNumber()
  @Min(0)
  budget: number;

  @IsNumber()
  @Min(0)
  revenue: number;

  @IsNumber()
  @Min(0)
  profit: number;

  @IsString()
  cover: string;

  @IsString()
  thumb: string;

  @IsOptional()
  @IsUrl()
  embeed_yt?: string;

  @IsArray()
  @IsEnum(Genre, { each: true })
  genres: Genre[];
}
