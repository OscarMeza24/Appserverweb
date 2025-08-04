import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateEnvioInput {
  @Field(() => Int, { description: 'Id del metodo de pago' })
  @IsNotEmpty()
  id: number;

  @Field(() => String, { description: 'Direccion del envio' })
  @IsNotEmpty()
  @IsString()
  Direccion: string;

  @Field(() => String, { description: 'Ciudad del envio' })
  @IsNotEmpty()
  @IsString()
  CodigoPostal: string;

  @Field(() => String, { description: 'Departamento del envio' })
  @IsNotEmpty()
  @IsString()
  Cuidad: string;

  @Field(() => String, { description: 'Pais del envio' })
  @IsNotEmpty()
  @IsString()
  Pais: string;
}
