import { IsInt, IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class UpdateProductoDto {
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  Categoria?: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  Color?: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  Texto?: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  Imagen?: string;

  @IsNotEmpty()
  @IsInt()
  @IsOptional()
  Precio?: number;

  @IsNotEmpty()
  @IsInt()
  @IsOptional()
  Stock?: number;
}
