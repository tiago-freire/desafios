import { IsEmail, IsNotEmpty } from 'class-validator';

export class GetUserByEmailDto {
  @IsNotEmpty()
  @IsEmail(undefined, { message: 'Email Inválido' })
  email: string;
}
