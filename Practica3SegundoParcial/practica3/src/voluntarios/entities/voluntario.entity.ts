/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Voluntario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  correo: string;

  @Column()
  telefono: string;

  @Column()
  direccion: string;

  @Column()
  fecha_nacimiento: string;

  @Column({ type: "enum", enum: ["Masculino", "Femenino"] })
  genero: "Masculino" | "Femenino";

  @Column({ type: "enum", enum: ["Activo", "Inactivo"] })
  estado: "Activo" | "Inactivo";
}
