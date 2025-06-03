import { Alerta } from "../../entities/alerta.entity";

export interface AlertaDataSource {
  getAll(): Promise<Alerta[]>;
  getById(id: string): Promise<Alerta | null>;
  create(alerta: Alerta): Promise<Alerta>;
  delete(id: string): Promise<void>;
}
