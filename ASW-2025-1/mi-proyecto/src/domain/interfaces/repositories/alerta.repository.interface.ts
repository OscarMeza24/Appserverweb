import { Alerta } from "../../entities/alerta.entity";

export interface AlertaRepository {
  findAll(): Promise<Alerta[]>;
  findById(id: string): Promise<Alerta | null>;
  save(alerta: Alerta): Promise<Alerta>;
  delete(id: string): Promise<void>;
}
