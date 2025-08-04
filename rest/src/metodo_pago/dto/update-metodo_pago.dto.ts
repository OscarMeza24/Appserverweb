import { IsString, IsOptional } from 'class-validator';

export class UpdateMetodoPagoDto {
  @IsString()
  @IsOptional()
  nombre?: string;

  @IsString()
  @IsOptional()
  descripcion?: string;

  @IsString()
  @IsOptional()
  imagen?: string;

  @IsString()
  @IsOptional()
  url?: string;
}
