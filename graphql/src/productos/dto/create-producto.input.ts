import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsInt } from 'class-validator';

@InputType()
export class CreateProductoInput {
  @Field(() => String, { description: 'Id del producto' })
  @IsNotEmpty()
  id: number;

  @Field(() => String, { description: 'Categoria del producto' })
  @IsNotEmpty()
  @IsString()
  Categoria: string;

  @Field(() => String, { description: 'Color del producto' })
  @IsNotEmpty()
  @IsString()
  Color: string;

  @Field(() => String, { description: 'Texto del producto' })
  @IsNotEmpty()
  @IsString()
  Texto: string;

  @Field(() => String, { description: 'Imagen del producto' })
  @IsNotEmpty()
  @IsString()
  Imagen: string;

  @Field(() => Int, { description: 'Precio del producto' })
  @IsNotEmpty()
  @IsInt()
  Precio: number;

  @Field(() => Int, { description: 'Stock del producto' })
  @IsNotEmpty()
  @IsInt()
  Stock: number;
}
