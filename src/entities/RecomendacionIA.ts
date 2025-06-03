// src/entities/RecomendacionIA.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Alerta } from "./Alerta";

@Entity()
export class RecomendacionIA {
  @PrimaryGeneratedColumn()
  id!: number; // Usamos el operador ! para propiedades inicializadas por TypeORM

  @ManyToOne(() => Alerta, (alerta) => alerta.recomendaciones)
  alerta!: Alerta;

  @Column("text")
  mensaje!: string;

  @Column("timestamp", { default: () => "CURRENT_TIMESTAMP" })
  fecha!: Date;
}
