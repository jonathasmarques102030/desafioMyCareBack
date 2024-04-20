import { IsEmail, IsString } from 'class-validator';

export class CreateEnfermeiroDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
