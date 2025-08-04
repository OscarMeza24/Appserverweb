import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
export class Producto {
  @Field(() => Int, { description: 'Id del producto' })
  @PrimaryGeneratedColumn()
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
