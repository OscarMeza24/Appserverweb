import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class UpdateEnvioDto {
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  Direccion?: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  CodigoPostal?: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  Cuidad?: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  Pais?: string;
}
