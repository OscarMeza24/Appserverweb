import { IsEmail, IsNotEmpty, IsString, MinLength, IsOptional } from 'class-validator';

export class UpdateUsuarioDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  nombre?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  apellido?: string;

  @IsEmail()
  @IsOptional()
  correo?: string;

  @IsString()
  @MinLength(6)
  @IsOptional()
  contrasena?: string;
}
