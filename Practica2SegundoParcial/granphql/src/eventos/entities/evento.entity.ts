import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field } from "@nestjs/graphql";

@ObjectType()
@Entity("eventos")
export class Evento {
    @Field()
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column({type: 'varchar'})
    nombre_evento: string;

    @Field()
    @Column({type: 'date'})
    fecha_evento: string;

    @Field()
    @Column({type: 'varchar'})
    lugar_evento: string;

    @Field()
    @Column({type: 'varchar'})
    estado: 'Activo' | 'Inactivo';
}