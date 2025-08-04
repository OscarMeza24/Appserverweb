import { IsNotEmpty, IsString } from 'class-validator';

export class CreateEnvioDto {
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
