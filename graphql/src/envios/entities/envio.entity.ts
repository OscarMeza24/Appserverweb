import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty, IsString } from 'class-validator';

@Entity()
@ObjectType()
export class Envio {
  @Field(() => Int, { description: 'Id del envio' })
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String, { description: 'Direccion del envio' })
  @IsNotEmpty()
  @IsString()
  Direccion: string;

  @Field(() => String, { description: 'Codigo postal del envio' })
  @IsNotEmpty()
  @IsString()
  CodigoPostal: string;

  @Field(() => String, { description: 'Ciudad del envio' })
  @IsNotEmpty()
  @IsString()
  Cuidad: string;

  @Field(() => String, { description: 'Pais del envio' })
  @IsNotEmpty()
  @IsString()
  Pais: string;
}
