import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("voluntarios")
export class Voluntario {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar'})
    nombre: string;

    @Column({type: 'varchar'})
    apellido: string;

    @Column({type: 'varchar'})
    correo: string;
    
    @Column({type: 'int'})
    telefono: number;
    
    @Column({type: 'varchar'})
    direccion: string;
    
    @Column({type: 'date'})
    fecha_nacimiento: string;
    
    @Column({type: 'varchar'})
    genero: 'Masculino' | 'Femenino';
    
    @Column({default: 'Activo'})
    estado: string;
}
