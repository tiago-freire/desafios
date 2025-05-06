import { IsNotEmpty, IsUUID } from 'class-validator';

export class GetMovieByIdDto {
  @IsNotEmpty()
  @IsUUID(undefined, { message: 'Id Inválido' })
  id: string;
}