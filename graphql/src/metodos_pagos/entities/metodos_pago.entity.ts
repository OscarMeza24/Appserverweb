import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class MetodosPago {
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String, { description: 'Nombre del metodo de pago' })
  nombre: string;

  @Field(() => String, { description: 'Descripcion del metodo de pago' })
  descripcion: string;

  @Field(() => String, { description: 'Imagen del metodo de pago' })
  imagen: string;

  @Field(() => String, { description: 'Url del metodo de pago' })
  url: string;
}
