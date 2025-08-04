import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateProductoDto {
  @IsNotEmpty()
  @IsString()
  Categoria: string;

  @IsNotEmpty()
  @IsString()
  Color: string;

  @IsNotEmpty()
  @IsString()
  Texto: string;

  @IsNotEmpty()
  @IsString()
  Imagen: string;

  @IsNotEmpty()
  @IsInt()
  Precio: number;

  @IsNotEmpty()
  @IsInt()
  Stock: number;
}
