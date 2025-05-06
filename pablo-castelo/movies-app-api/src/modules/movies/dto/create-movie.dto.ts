import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateMovieDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  originalTitle: string;

  @IsNotEmpty()
  releaseDate: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  duration: number;

  @IsNotEmpty()
  budget: number;

  @IsOptional()
  @IsString()
  imageUrl?: string;
}
