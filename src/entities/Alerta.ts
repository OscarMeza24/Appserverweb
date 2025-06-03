import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { RecomendacionIA } from "./RecomendacionIA";

@Entity()
export class Alerta {
  // Asegúrate de usar 'export' aquí
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("text")
  mensaje!: string;

  @Column({
    type: "enum",
    enum: ["baja", "media", "alta", "crítica"],
    default: "media",
  })
  nivel!: "baja" | "media" | "alta" | "crítica";

  @Column("boolean", { default: true })
  activa!: boolean;

  @Column({ length: 100 })
  origen!: string;

  @Column("timestamp", { default: () => "CURRENT_TIMESTAMP" })
  fecha!: Date;

  @OneToMany(() => RecomendacionIA, (recomendacion) => recomendacion.alerta)
  recomendaciones!: RecomendacionIA[];
}

// Asegúrate de que no haya otro 'Alerta' sin exportar en el mismo archivo
