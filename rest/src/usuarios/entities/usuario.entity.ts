import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class Usuario {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;

  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  apellido: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  correo: string;

  @IsNotEmpty()
  @IsString()
  contrasena: string;
}
