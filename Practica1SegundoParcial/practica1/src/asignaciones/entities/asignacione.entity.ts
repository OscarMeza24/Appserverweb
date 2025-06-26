import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("asignaciones")
export class Asignacione {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar'})
    nombre_asignacion: string;

    @Column({type: 'varchar'})
    rol: string;

    @Column({type: 'varchar'})
    fecha_asignacion: string;

    @Column({type: 'varchar'})
    estado: 'Activo' | 'Inactivo';
}
