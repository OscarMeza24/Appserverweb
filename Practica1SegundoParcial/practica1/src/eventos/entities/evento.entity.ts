import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("eventos")
export class Evento {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar'})
    nombre_evento: string;

    @Column({type: 'date'})
    fecha_evento: string;

    @Column({type: 'varchar'})
    lugar_evento: string;

    @Column({type: 'varchar'})
    estado: string;
}
