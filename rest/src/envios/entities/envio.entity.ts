import { IsNotEmpty, IsString } from 'class-validator';

export class Envio {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;

  @IsNotEmpty()
  @IsString()
  Direccion: string;

  @IsNotEmpty()
  @IsString()
  CodigoPostal: string;

  @IsNotEmpty()
  @IsString()
  Cuidad: string;

  @IsNotEmpty()
  @IsString()
  Pais: string;
}
