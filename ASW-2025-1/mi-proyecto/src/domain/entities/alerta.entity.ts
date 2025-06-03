import { Entity, ObjectIdColumn, Column } from "typeorm";
import { ObjectId } from "mongodb";

@Entity()
export class Alerta {
  @ObjectIdColumn()
  id!: ObjectId;

  @Column()
  mensaje!: string;

  @Column()
  fecha!: Date;

  @Column({ default: false })
  atendida!: boolean;
}
