import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMetodoPagoDto {
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
