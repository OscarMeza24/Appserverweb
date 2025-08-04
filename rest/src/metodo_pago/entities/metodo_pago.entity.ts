import { IsNotEmpty, IsString } from 'class-validator';

export class MetodoPago {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;

  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  descripcion: string;

  @IsNotEmpty()
  @IsString()
  imagen: string;

  @IsNotEmpty()
  @IsString()
  url: string;
}
