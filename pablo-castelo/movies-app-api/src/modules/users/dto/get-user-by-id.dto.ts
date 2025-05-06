import { IsNotEmpty, IsUUID } from 'class-validator';

export class GetUserByIdDto {
  @IsNotEmpty()
  @IsUUID(undefined, { message: 'Id Inválido' })
  id: string;
}
