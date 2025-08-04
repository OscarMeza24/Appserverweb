import { ObjectType, Field, ID } from '@nestjs/graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

@ObjectType()
@Entity()
export class Usuario {
  @Field(() => ID)
  @PrimaryGeneratedColumn('increment')
  id: number;

  @CreateDateColumn({ name: 'created_at' })
  @Field(() => Date)
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  @Field(() => Date, { nullable: true })
  updatedAt: Date;

  @Column()
  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @Column()
  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  apellido: string;

  @Column()
  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  correo: string;

  @Column()
  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  contrasena: string;
}
