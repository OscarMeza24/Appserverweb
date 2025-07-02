import { Int, Field, InputType } from '@nestjs/graphql';
import { Voluntario } from '../entities/voluntario.entity';
import { IsNotEmpty, IsString, IsNumber, isEmail } from 'class-validator';

@InputType()
export class CreateVoluntarioInput implements Partial<Voluntario> {
  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  apellido: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  correo: string;

  @Field(() => Int)
  @IsNotEmpty()
  @IsNumber()
  telefono: number;

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  direccion: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  fecha_nacimiento: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  genero: 'Masculino' | 'Femenino';

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  estado: string;
}
