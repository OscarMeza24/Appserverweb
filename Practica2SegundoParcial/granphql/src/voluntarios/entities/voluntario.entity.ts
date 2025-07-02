import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity("voluntarios")
export class Voluntario {
    @Field()
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column({type: 'varchar'})
    nombre: string;

    @Field()
    @Column({type: 'varchar'})
    apellido: string;

    @Field()
    @Column({type: 'varchar'})
    correo: string;
    
    @Field()
    @Column({type: 'int'})
    telefono: number;
    
    @Field()
    @Column({type: 'varchar'})
    direccion: string;
    
    @Column({type: 'date'})
    fecha_nacimiento: string;
    
    @Column({type: 'varchar'})
    genero: 'Masculino' | 'Femenino';
    
    @Column({default: 'Activo'})
    estado: string;
}
