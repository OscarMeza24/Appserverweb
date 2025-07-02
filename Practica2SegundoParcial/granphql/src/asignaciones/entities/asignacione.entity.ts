import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@ObjectType()
@Entity("asignaciones")
export class Asignacione {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => String)
    @Column({type: 'varchar'})
    nombre_asignacion: string;

    @Field(() => String)
    @Column({type: 'varchar'})
    rol: string;

    @Field(() => String)
    @Column({type: 'varchar'})
    fecha_asignacion: string;

    @Field(() => String)
    @Column({type: 'varchar'})
    estado: 'Activo' | 'Inactivo';
}
