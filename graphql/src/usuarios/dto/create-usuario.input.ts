import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsEmail, MinLength } from 'class-validator';

@InputType()
export class CreateUsuarioInput {
  @Field(() => String, { description: 'Nombre del usuario' })
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @Field(() => String, { description: 'Apellido del usuario' })
  @IsNotEmpty()
  @IsString()
  apellido: string;

  @Field(() => String, { description: 'Correo del usuario' })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  correo: string;

  @Field(() => String, { description: 'Contrasena del usuario' })
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  contrasena: string;
}
