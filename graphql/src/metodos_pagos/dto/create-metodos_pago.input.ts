import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateMetodosPagoInput {
  @Field(() => String, { description: 'Nombre del metodo de pago' })
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @Field(() => String, { description: 'Descripcion del metodo de pago' })
  @IsNotEmpty()
  @IsString()
  descripcion: string;

  @Field(() => String, { description: 'Imagen del metodo de pago' })
  @IsNotEmpty()
  @IsString()
  imagen: string;

  @Field(() => String, { description: 'Url del metodo de pago' })
  @IsNotEmpty()
  @IsString()
  url: string;
}
