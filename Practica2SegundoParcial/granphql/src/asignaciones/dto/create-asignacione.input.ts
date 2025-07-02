import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsOptional, IsDateString } from 'class-validator';

@InputType()
export class CreateAsignacioneInput {
  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  nombre_asignacion: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  rol: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsDateString()
  fecha_asignacion: string;

  @Field(() => String)
  @IsOptional()
  estado: 'Activo' | 'Inactivo';
}
